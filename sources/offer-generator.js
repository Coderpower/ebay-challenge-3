module.exports = function (client, products, categories){
    var limit = client.budget;
    var temp_cart = []
    var cart = [];

    products.forEach(function(product){
        var price = getProductPrice(product);
        var weight = getWeightFromCategories(product.categories);

        temp_cart.push({id: product.id, price: price, weight: weight});
    });

    temp_cart.sort(byWeight);

    temp_cart.forEach(function(item){
        if (item.price <= limit)
            cart.push(getProductFromId(item.id))
    });

    function getProductFromId(id){
        for (var i=0; i<products.length; i++)
            if (product.id === id)
                return product

        return null;
    }

    function getProductPrice(product){
        return product.price * (1 - product.discount);
    }

    function getWeightFromCategories(categories){
        return categories.reduce(function(weight, category){
            return client.interests[category]? weight + client.interests[category].weight : weight;
        }, 0);
    }

    function byWeight(a, b){
        return a.weight - b.weight;
    }
};
