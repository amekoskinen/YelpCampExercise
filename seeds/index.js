const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const seedHelpers = require('./seedHelpers');


mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) { 
        const rand1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            author: '6968b9941189404708b03bac',
            price: `${Math.floor(Math.random() * 20) + 10}`,
            location: `${cities[rand1000].city}, ${cities[rand1000].state}`,
            title: `${seedHelpers.descriptors[Math.floor(Math.random() * seedHelpers.descriptors.length)]} ${seedHelpers.places[Math.floor(Math.random() * seedHelpers.places.length)]}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: `https://picsum.photos/400?random=${Math.random()}`,
        });
        await camp.save();
        };
    
    }

seedDB().then(() => {
    mongoose.connection.close();
});

