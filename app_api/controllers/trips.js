const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /trips
// Returns all trips
const tripsList = async (req, res) => {
  const trips = await Trip.find({}).exec();

  if (!trips) {
    return res
      .status(404)
      .json({ message: 'Trips not found' });
  }

  return res
    .status(200)
    .json(trips);
};

// GET: /trips/:tripCode
// Returns one trip based on its code
const tripsFindByCode = async (req, res) => {
  const trip = await Trip
    .find({ code: req.params.tripCode })
    .exec();

  if (!trip || trip.length === 0) {
    return res
      .status(404)
      .json({ message: 'Trip not found' });
  }

  return res
    .status(200)
    .json(trip);
};

module.exports = {
  tripsList,
  tripsFindByCode
};