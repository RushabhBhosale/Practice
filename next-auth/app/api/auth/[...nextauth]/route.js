import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import brcypt from 'bcrypt'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const authOptions = {
   adapters: PrismaAdapter(prisma),
   providers: [
      CredentialsProvider({
         name: "credentials",
         credentials: {
            username: {label: "Username", type:"text", placeholder:"Rushabh Bhosale"},
            password: {label: "Password", type:"password"},
         },

         async authorize(credentials) {

         }
      })
   ],
   session: {
      strategy: "jwt",
   },
   secret: process.env.NEXTAUTH_SECRET,
   debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}