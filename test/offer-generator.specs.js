var expect = require('expect.js');
var getOffers = require('../sources/offer-generator.js');
var data = require('./products.json');
var clients = require('./clients.json');

suite('Offer Generator', function(){
    test('Should advice Edward with the proper products', function(){
        var products = JSON.parse(JSON.stringify(data))
        var client = clients[0];

        var offers  = getOffers(client, products);

        expect(offers).to.eql([
            "575fdb7fc33f3e6505479ec8",
            "575fdb7f625ab938a53d92e6",
            "575fdb7f2962a7d577a6d06d"
        ]);
    });

    test('Should advice Adeline with the proper products', function(){
        var products = JSON.parse(JSON.stringify(data))
        var client = clients[1];

        var offers  = getOffers(client, products);

        expect(offers).to.eql([
            "575fdb7f625ab938a53d181f",
            "575fdb7fd848ed0f63ebbaf4",
            "575fdb7f625ab938a53d92e6",
            "575fdb7f2082640b0256e704",
            "575fdb7f0e8152b40b1f0e67",
            "575fdb7f5d7b6bbe45ca84cb",
            "575fdb7fc33f3e6505479ec8",

        ]);
    });

    test('Should advice Jack with the proper products', function(){
        var products = JSON.parse(JSON.stringify(data))
        var client = clients[2];

        var offers  = getOffers(client, products);

        expect(offers).to.eql([
            "575fdb7fc33f3e6505479ec8"
        ]);
    });
});
