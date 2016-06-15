### The right offers

People visit eBay with a certain budget in mind. Since there are a myriad of items to choose from, visitors need to know which product(s) best fit their interests and budget to ensure they make the right purchase.

> **Objective**  
> Find the formula used to calculate the relevance of an offer, then return an array of offers, sorted from the most relevant to the least relevant. If offers have the same level of relevance, then sort them by price from the cheapest to the most expensive.


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
