// Bring in the database connection and Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from the JSON file
const fs = require('fs');
const trips = JSON.parse(
    fs.readFileSync('./data/trips.json', 'utf8')
);

// Delete existing trips and insert the seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});