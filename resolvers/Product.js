exports.Product = {
    category: ({ categoryId }, args, { db }) => {
    // console.log(context)
      return db.categories.find((category) => category.id === categoryId)
    },
    reviews: ({ id }, args, { db }) => {
      return db.reviews.filter(review => review.productId === id)
    }
  }