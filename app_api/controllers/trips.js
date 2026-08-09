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

// POST: /trips
// Adds a new trip
const tripsAddTrip = async (req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });

  const savedTrip = await newTrip.save();

  return res
    .status(201)
    .json(savedTrip);
};

// PUT: /trips/:tripCode
// Updates an existing trip
const tripsUpdateTrip = async (req, res) => {
  console.log(req.params);
  console.log(req.body);

  const q = await Trip
    .findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      }
    )
    .exec();

  if (!q) {
    return res
      .status(400)
      .json({ message: 'Trip not found' });
  }

  return res
    .status(201)
    .json(q);
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};