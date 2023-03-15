const { ApolloServer, gql } = require("apollo-server")
const { typeDefs } = require("./schema");
const { Query } = require('./resolvers/Query') 
const { Product } = require('./resolvers/Product') 
const { Category } = require('./resolvers/Category')
const { Mutation } = require('./resolvers/Mutation')
const { db } = require('./db');

//resolver: function that is returning a string which we have specified in our type definition
const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Product,
      Category,
      Mutation
    },
    context: {
      db,
    },
});

server.listen().then(({url}) => {
    console.log("Server is ready at " + url)
})