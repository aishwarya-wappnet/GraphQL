exports.Product = {
    category: ({ categoryId }, args, { categories }) => {
    // console.log(context)
      return categories.find((category) => category.id === categoryId)
    },
    reviews: ({ id }, args, { reviews }) => {
      return reviews.filter(review => review.productId === id)
    }
  }