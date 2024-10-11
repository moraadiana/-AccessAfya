const { ApolloServer, gql } = require("apollo-server");

// GraphQL schema
const typeDefs = gql`
  type Clinic {
    id: ID!
    name: String!
    visits: Int!
  }

  type KeyIssue {
    issue: String!
    frequency: String!
  }

  type Stats {
    footfall: Int!
    satisfaction: Float!
    revenue: Float!
  }

  type StaffPerformance {
    id: ID!
    name: String!
    efficiencyDelta: Float!
    npsDelta: Float!
  }

  type Query {
    clinics: [Clinic!]!
    keyIssues: [KeyIssue!]!
    stats: Stats!
    staffPerformance: [StaffPerformance!]!
  }
`;

// Sample data (to replace with database)
const clinics = [
  { id: "1", name: "Kiandutu", visits: 7 },
  { id: "2", name: "Mukuru Kwa Ruben", visits: 12 },
];

const keyIssues = [
  { issue: "Wrong Prescription", frequency: "Monthly" },
  { issue: "Delay in Lab", frequency: "Monthly" },
];

const stats = { footfall: 13000, satisfaction: 7.8, revenue: 4.2 };

const staffPerformance = [
  { id: "1", name: "Mercy Mukopa", efficiencyDelta: 1.2, npsDelta: 1.2 },
  { id: "2", name: "Kennedy Ayako", efficiencyDelta: 1.8, npsDelta: 1.4 },
];

// Define resolvers
const resolvers = {
  Query: {
    clinics: () => clinics,
    keyIssues: () => keyIssues,
    stats: () => stats,
    staffPerformance: () => staffPerformance,
  },
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
