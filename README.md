## The right offers
People are going on eBay with a defined budget. Since there are a lot of products available, people have to choose but they would like to know which product would fit the best their interests and budget.

> **Objective**  
> Find the formula used to build offers that are matching people interests and budget then return an array of offers, sorted by the most relevant to the less relevant. If offers have the same level of relevance then sort them by price.  


#### Help

```javascript
// a client
{
    "id": String,
    "username": String,
    "interests": [{
        "name": String
        "weight": Number // from 1 to 5
    }]
    "budget": Number // always > 0
}
```

```javascript
// a product
{
    "categories": [String],
    "price": Number,
    "discount": Number, // from 0 to 1, 0 = 0%, 1 = 100%
    "name": String,
    "id": String
}
```

```javascript
// an offer
{
    "productId": String,
    "price": Number, // product price with the applied discount if any.
    "relevance": Number // calculated from the interests of the client and the product categories.
}
```
