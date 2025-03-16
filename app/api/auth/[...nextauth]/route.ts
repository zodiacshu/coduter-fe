import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account }:any) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      console.log(token.accessToken)
      return token;
    },
    async session({ session, token }:any) {
      // Send properties to the client, like an access_token from a provider
      session.accessToken = token.accessToken;
      console.log(session.accessToken)
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };