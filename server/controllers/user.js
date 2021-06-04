const Users = require('../models').users;

module.exports = {
    findByEmail(req, res) {
        return Users.findOne({
            where: {
                email: req
            }
        })
        .then(function(data) {
            return data;
        });
    }
}