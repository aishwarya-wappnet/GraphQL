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
    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products
        console.log(db.reviews)
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
                    db.reviews.forEach((review) => {
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
    product: (parent, { id }, { db }) => {
        // console.log(args);
        return db.products.find(product => product.id === id)
    },
    categories: (parent, args, { db }) => {
        return db.categories;
    },
    category: (parents, { id }, { db }) => {
        return db.categories.find((category) => category.id === id)
    }
}