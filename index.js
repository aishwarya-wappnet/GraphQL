const { ApolloServer, gql } = require("apollo-server")


// Scalar types: String, Int, Float, Boolean, ID

// Defining how our query is going to look
const typeDefs = gql`
   type Query {
    hello: String!
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
   }
`
//function that is returning a string which we have specified in our type definition
const resolvers = {
    Query: {
        hello: () => {
            return null;
        },
        numberOfAnimals: () => {
            return 55;
        },
        price: () => {
            return 23454.2656;
        },
        isCool: () => {
            return false;
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({url}) => {
    console.log("Server is ready at " + url);
})