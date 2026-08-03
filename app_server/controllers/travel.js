const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
};

const travel = async (req, res) => {
    try {
        const response = await fetch(tripsEndpoint, options);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const trips = await response.json();

        if (!Array.isArray(trips)) {
            throw new Error('API response was not a valid trip collection');
        }

        res.render('travel', {
            title: 'Travlr Getaways',
            trips,
            message: trips.length === 0 ? 'No trips are currently available.' : null
        });
    } catch (err) {
        res.status(500).render('travel', {
            title: 'Travlr Getaways',
            trips: [],
            message: err.message
        });
    }
};

module.exports = {
    travel
};