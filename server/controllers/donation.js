const Donation = require('../models').Donation;
const Users = require('../models').users;

module.exports = {
    getAll() {
        return Donation.findAll({
            include: [
                {model: Users, as: 'user'}
            ],
        })
        .then(function(data) {
            return data;
        });
    }
}