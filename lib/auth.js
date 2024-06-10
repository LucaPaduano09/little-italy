import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../models/User";
import connect from "../db";
import { getUserNewsletterStatus } from "./getUserNewsletterStatus";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("signIn callback - user:", user.email);
      try {
        await connect();

        // Cerca l'utente nel database
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          // Se l'utente non esiste, creane uno nuovo
          await User.create({
            email: user.email,
            newsletter: user.newsletter || false,
            orders: [],
            cart: [],
            active: false,
            // Aggiungi altre proprietà se necessario
          });
        } else {
          // Se l'utente esiste, aggiorna i dati
          existingUser.email = user.email;
          // existingUser.image = user.image;
          // Aggiorna altre proprietà se necessario
          await existingUser.save();
        }

        return true;
      } catch (error) {
        console.error("Error saving user to database", error);
        return false;
      }
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.newsletter = token.newsletter;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.newsletter = await getUserNewsletterStatus(user.email);
        console.log(token.newsletter);
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
