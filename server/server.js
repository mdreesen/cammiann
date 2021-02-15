const express = require('express');
// import the ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

// connection to the db
const db = require('./config/connection');

// middleware for db connection
const PORT = process.env.PORT || 3001;
const app = express();

// create new Apollo server and pass in our schema data
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// integrate our Apollo server with teh express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
      // API server port
    console.log(`API server running on port ${PORT}!`);
    // Graphql server port
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  });
});