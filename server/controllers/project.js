const Project = require('../models').Project;

module.exports = {
    getAll() {
        return Project.findAll(
        )
        .then(function(data) {
            return data;
        });
    }
}