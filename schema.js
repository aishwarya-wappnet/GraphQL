// Scalar types: String, Int, Float, Boolean, ID

// Defining how our query is going to look
// Defining the structure of our data
const { gql } = require("apollo-server")

exports.typeDefs = gql`
   type Query {
      hello: [String!]!
      numberOfAnimals: Int
      price: Float
      isCool: Boolean
      products(filter: ProductsFilterInput): [Product!]!  # Object type
      product(id: ID!): Product
      categories: [Category!]!
      category(id: ID!): Category
   }

   type Mutation{
      addCategory(input: AddCategoryInput!): Category!
      addProduct(input: AddProductInput!): Product!
      addReview(input: AddReviewInput!): Review!
      deleteCategory(id: ID!): Boolean!
      deleteProduct(id: ID!): Boolean!
      deleteReview(id: ID!): Boolean!
      updateCategory(id: ID!, input: UpdateCategoryInput!): Category
      updateProduct(id: ID!, input: UpdateProductInput!): Product
      updateReview(id: ID!, input: UpdateReviewInput!): Review
   }

   type Product {
      id: ID!
      name: String!
      description: String!
      image: String!
      quantity: Int!
      price: Float!
      onSale: Boolean!
      category: Category
      reviews: [Review!]!
   }
   # this is under the separate type defination. How do we resolve for products for a specific category. So in this case we need to create the
   # resolver for the category and not the query
   type Category {
      id: ID!
      name: String!
      products(filter: ProductsFilterInput): [Product!]!
   }

   type Review {
      id: ID!
      date: String!
      title: String!
      comment: String!
      rating: Int!
   }

   input ProductsFilterInput {
      onSale: Boolean
      avgRating: Int
   }

   input AddCategoryInput {
      name: String!
   }

   input UpdateCategoryInput {
      name: String!
   }

   input AddProductInput{
      name: String!
      description: String!
      image: String!
      quantity: Int!
      price: Float!
      onSale: Boolean!
      categoryId: String!
   }

   input UpdateProductInput{
      name: String
      description: String
      image: String
      quantity: Int
      price: Float
      onSale: Boolean
      categoryId: String
   }

   input AddReviewInput{
      date: String!,
      title: String!,
      comment: String!,
      rating: Int!,
      productId: ID!
   }

   input UpdateReviewInput{
      date: String!,
      title: String!,
      comment: String!,
      rating: Int!,
      productId: ID!
   }
`