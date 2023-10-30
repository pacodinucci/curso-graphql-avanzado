import { ApolloServer } from "apollo-server";

// 1-query
const typeDefs = `
  type Query {
    info: String!
  }
`
// 2-resolver
const resolvers = {
  Query: {
    info: () => `This is the API of Platzi Node GraphQL`
  }
}

// 3-server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => console.log(`Server is running on ${url}`))
