import Sql from "better-sqlite3";
import bcrypt from "bcrypt";
import { User } from "@/types/type";

const db = new Sql("game.db");

db.pragma("foreign_keys = on");

db.exec(`
  CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS watchlist(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL UNIQUE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
  CREATE TABLE IF NOT EXISTS watchlist_items(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    watchlist_id INTEGER NOT NULL,
    game_id INTEGER NOT NULL,
    FOREIGN KEY (watchlist_id) REFERENCES watchlist(id) ON DELETE CASCADE,
    UNIQUE (game_id, watchlist_id)
  );
`);

export function getUser(username: string, email: string) {
  const user = db
    .prepare(
      `
    SELECT id FROM users
    WHERE username = ? OR email = ?
  `,
    )
    .get(username, email) as { id: number } | undefined;

  if (user) {
    return user;
  }
}

export async function login(usernameOrEmail: string, password: string) {
  const user = db
    .prepare(
      `
    SELECT id, email, username, password_hash FROM users
    WHERE username = ? OR email = ?
  `,
    )
    .get(usernameOrEmail, usernameOrEmail) as User;

  if (!user) {
    return { error: "Wrong password or invalid username or email." };
  }

  const passwordHash = user.password_hash;
  const confirmPassword = await bcrypt.compare(password, passwordHash);
  if (!confirmPassword) {
    return { error: "Wrong password or invalid username or email." };
  }

  return user;
}

export async function signup(
  username: string,
  email: string,
  password: string,
) {
  const user = getUser(username, email);
  if (user) {
    return { error: "Email or username is already exists" };
  }

  const password_hash = await bcrypt.hash(password, 12);
  db.prepare(
    `
    INSERT INTO users(
      username,
      email,
      password_hash
    ) VALUES (?, ?, ?)
  `,
  ).run(username, email, password_hash);
}
