const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check for name. No name specified"]
    },
    rating: {
        type: Number,
        min: 1, max: 10,
    },
    review: String,
    
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
    name: "Peach",
    rating: 10,
    review: "Peaches are very good."
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

person.save()

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 6,
//     review: "Interesting i guess"
// })

// const orange = new Fruit({
//     name: "Orange",
//     score: 8,
//     review: "Juicy and good"
// })
// const banana = new Fruit({
//     name: "Banana",
//     score: 9,
//     review: "Top tier. Good with a lot of stuff"
// })

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

// Update data
// Fruit.updateOne({_id: "6120224afa1cd1256c68c9f3"}, {name: "Peaches"}, function(err){
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Successfully updated.")
//     }
// })

// Delete Data
// Fruit.deleteOne({name: "Kiwi"}, function(err){
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Successfully deleted.")
//     }
// })

// Person.deleteMany({name: "John"}, function(err){
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Successfully deleted many items.")
//     }
// })