People are going on eBay with a certain budget and multiple interests. Since there are a lot of products available, people have to choose but they would like to know which product would be the best fitting their interests.They have the possibility to fill out their interests and order them by preferences.
Objective: Build propositions that are matching their interests, respecting the order.


Person
{
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "interests": [{
        "id": "string"
        "weight": number
    }]
    "budget": number
}


Product
{
    "id": "string"
    "name": "string"
    "price": Number
    "categories": ["id"]
    "discount": "number"
}

// user
{
    "id":"abcdef",
    "firstName": "Julien",
    "lastname": "Sarazin",
    interests: [
    {
        "id": "id_1",
        "weight": 30
    },
    {
        "id": "id_2",
        "weight": 10
    },
    {
        "id": "id_3",
        "weight": 50
    }]
}

// Product
{
   "id" : "id_1",
   "name": "Nerf Probounce",
   "categories": ["id_4"]
}


// Categories
{
    "id": "id_1",
    "name": "Motors"
},
{
    "id": "id_2",
    "name": "Fashion",
},
{
    "id": "id_3",
    "name": "Sports"
},
{
    "id": "id_4",
    "name": "Toys"
},
{
    "id": "id_5",
    "name": "Music"
}
