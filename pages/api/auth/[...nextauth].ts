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
        // const res = await fetch("http://localhost:3000/api/users", {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()

        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   user.id = 2;
        //   return user
        // }
        if (credentials && credentials.username === "admin@admin" && credentials.password === "admin") {
          return {
            id: 2,
            username: "admin",
            email: credentials.username
          }
        }


        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  }
});