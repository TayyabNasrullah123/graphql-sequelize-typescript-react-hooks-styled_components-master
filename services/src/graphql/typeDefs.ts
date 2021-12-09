import { gql } from "apollo-server";

const typeDefs = gql`
  type Chef {
    id: ID!
    name: String!
    restaurants: [Restaurant!]!
  }

  type Restaurant {
    id: ID!
    name: String!
  }

  type Mutation {
    createChef(name: String!): Chef!
    createRestaurant(chefId: ID!, name: String!): Restaurant!
    deleteChef(id: String!):String
  }

  type Query {
    chefs: [Chef!]!
  }
`;

export default typeDefs;
