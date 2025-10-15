import { Resolvers } from "./__generated__/resolvers-types"

export const resolvers: Resolvers = {
  Query: {
    hello: {
      resolve: async () => {
        return "Hello from GraphQL Subgraph!"
      },
    },
  },
  User: {
    __resolveReference: async (user: { id: string }) => {
      // TODO: Replace with actual user lookup from your data source
      // This resolver is called when another subgraph needs to resolve a User by ID
      return {
        id: user.id,
        exampleField: "Example data for user " + user.id,
      }
    },
  },
}
