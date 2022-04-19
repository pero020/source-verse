import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "/lib/mongodb"
import addUser from "./addUser";
import getUser from "../getUser/[email]"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.secret,
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      account && addUser(token);
      return token
    },
    async session({ session, token, user }) {

      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB);

      const userData = await db.collection("users").findOne({email: token.email});
      session.role = userData.role
      session.user.name = userData.name

      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.sub = token.sub;
      return session
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  }
})