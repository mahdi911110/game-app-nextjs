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
  const passwordHash = await bcrypt.hash(password, 12);

  const createUser = db.transaction(() => {
    const user = getUser(username, email);

    if (user) {
      return {
        error: "Email or username already exists",
      };
    }

    const newUser = db
      .prepare(`
        INSERT INTO users (
          username,
          email,
          password_hash
        )
        VALUES (?, ?, ?)
      `)
      .run(username, email, passwordHash);

    db.prepare(`
      INSERT INTO watchlist (
        user_id
      )
      VALUES (?)
    `).run(newUser.lastInsertRowid);

    return {
      success: true,
    };
  });

  return createUser();
}

export function getGame(userId: number, gameId: number) {
  const game = db.prepare(`
    SELECT id FROM watchlist_items
    WHERE game_id = ?
      AND watchlist_id = (
        SELECT id FROM watchlist
        WHERE user_id = ?
      )
  `).get(gameId, userId) as { id: number } | undefined;
  
  return !!game;
}

export function getAllGames(userId: number) {
  const game = db.prepare(`
    SELECT game_id FROM watchlist_items
    WHERE watchlist_id = (
      SELECT id FROM watchlist
      WHERE user_id = ?
    )
  `).all(userId) as { game_id: number }[];
  
  return game;
}

export function getAllGamesWithPage(userId: number, page = 1) {
  const limit = 20;
  const offset = (page - 1) * limit;
  const game = db.prepare(`
    SELECT game_id FROM watchlist_items
    WHERE watchlist_id = (
      SELECT id FROM watchlist
      WHERE user_id = ?
    )
    LIMIT ? OFFSET ?
  `).all(userId, limit, offset) as { game_id: number }[];
  
  return game;
}

export function getTotalItems(userId: number) {
  const totalItems = db.prepare(`
    SELECT COUNT(*) AS count FROM watchlist_items
    WHERE watchlist_id = (
      SELECT id FROM watchlist
      WHERE user_id = ?
    )
  `).get(userId) as { count: number } | undefined;

  if (!totalItems) {
    return 0;
  }
  
  return totalItems.count;
}

export function addGame(userId: number, gameId: number) {
  const watchlist = db.prepare(`
    SELECT id FROM watchlist
    WHERE user_id = ?
  `).get(userId) as { id: number } | undefined;

  if (!watchlist) {
    return { error: 'You must login to add game to your watchlist' };
  }

  db.prepare(`
    INSERT INTO watchlist_items(
      watchlist_id,
      game_id
    ) VALUES (?, ?)
  `).run(watchlist.id, gameId);
}

export function deleteGame(userId: number, gameId: number) {
  db.prepare(`
    DELETE FROM watchlist_items
    WHERE game_id = ?
      AND watchlist_id = (
        SELECT id FROM watchlist
        WHERE user_id = ?
      )
  `).run(gameId, userId);
}