import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./gamedb";
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        usernameOrEmail: {},
        password: {}
      },

      async authorize(credentials) {
        const usernameOrEmail = credentials.usernameOrEmail as string;
        const password = credentials.password as string;

        if (!usernameOrEmail || !password) {
          return null;
        }

        const user = await login(
          usernameOrEmail,
          password
        );

        if (!user || 'error' in user) {
          return null;
        }

        return {
          id: String(user.id),
          name: user.username,
          email: user.email,
        }
      }
    })
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }

      return session;
    },
  },
  
  pages: {
    signIn: '/login'
  }
});