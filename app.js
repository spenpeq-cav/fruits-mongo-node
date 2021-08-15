const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Apples are pretty good."
})

// fruit.save()

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const Person = mongoose.model("Person", personSchema)

const person = new Person({
    name: "John",
    age: 37
})

// person.save()

const kiwi = new Fruit({
    name: "Kiwi",
    score: 6,
    review: "Interesting i guess"
})

const orange = new Fruit({
    name: "Orange",
    score: 8,
    review: "Juicy and good"
})
const banana = new Fruit({
    name: "Banana",
    score: 9,
    review: "Top tier. Good with a lot of stuff"
})

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Success, No Error")
//     }
// })


Fruit.find(function(err, fruits){
    if(err){
        console.log(err)
    } else {
        mongoose.connection.close()
        fruits.forEach(function(fruit){
            console.log(fruit.name)
        })
    }
})