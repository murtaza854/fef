const Newsletter = require('../models').Newsletter;

module.exports = {
    getAll() {
        return Newsletter.findAll(
        )
        .then(function(data) {
            return data;
        });
    }
}