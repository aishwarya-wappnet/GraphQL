exports.Query = {
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
    },
    products: (parent, { filter }, { products, reviews }) => {
        let filteredProducts = products
        if(filter){
        const { onSale, avgRating } = filter;
            if(onSale === true){
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale;
                })
            }
            if([1, 2, 3, 4, 5].includes(avgRating)){
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach((review) => {
                        if(review.productId === product.id){
                            sumRating += review.rating
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating/numberOfReviews;
                    // console.log(avgProductRating, product.name);
                    return avgProductRating >= avgRating
                })
            }
        }
        return filteredProducts;
    },
    product: (parent, { id }, { products }) => {
        // console.log(args);
        return products.find(product => product.id === id)
    },
    categories: (parent, args, { categories }) => {
        return categories;
    },
    category: (parents, { id }, { categories }) => {
        return categories.find((category) => category.id === id)
    }
}