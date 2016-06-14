var expect = require('expect.js');
var addition = require('../sources/offer-generator.js');


var products = [

]

suite('Offer Generator', function(){

    test('Must return the right products', function(){
        var a = 'p';
        var b = 32;
        var result = addition(a, b);
        expect(result).to.be('isNaN');
    });

    test('Must return a number', function(){
        var a = '2';
        var b = 5;
        var result = addition(a, b);
        expect(result).to.be.a('number');
    });

    test('Must return a right result', function(){
        var a = '23';
        var b = 54;
        var result = addition(a, b);
        expect(result).to.be.equal(77);
    });

});
