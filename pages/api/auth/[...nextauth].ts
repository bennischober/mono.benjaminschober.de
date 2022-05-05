import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "email", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder: "password" }
      },
      authorize: async (credentials) => {
        const res = await fetch("http://localhost:3000/api/users", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });

        const user = await res.json();
        console.log("fetch result", res, "user", user);

        // status 200 => user exists
        if (res.status === 200) {
          return {
            id: 2,
            name: user.name,
            email: user.username,
            status: "authorized"
          }
        }

        // Return null if user data could not be retrieved
        return {
          id: 0,
          name: user.name,
          email: user.username,
          status: "unauthorized"
        };
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.status = user.status;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.status = token.status;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    signIn: "/login",
  }
});