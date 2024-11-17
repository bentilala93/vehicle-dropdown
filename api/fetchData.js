const axios = require('axios');
const corsMiddleware = require('./corsMiddleware');

module.exports = async (req, res) => {
    corsMiddleware(req, res, async () => {
        const { type, token, year, make } = req.query;

        if (!type || !token) {
            return res.status(400).json({ message: 'Missing required parameters (type, token)' });
        }

        try {
            let url = '';
            let params = { token };

            if (type === 'years') {
                url = 'https://rateengine.ship.cars/v2/vehicles/years/';
            } else if (type === 'makes' && year) {
                url = `https://rateengine.ship.cars/v2/vehicles/makes/?year=${year}`;
            } else if (type === 'models' && year && make) {
                url = `https://rateengine.ship.cars/v2/vehicles/models/?year=${year}&make=${make}`;
            } else {
                return res.status(400).json({ message: 'Invalid parameters for the requested type.' });
            }

            const response = await axios.get(url, { params });
            res.status(200).json(response.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'API error', error: error.message });
        }
    });
};
