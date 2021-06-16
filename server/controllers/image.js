const Image = require('../models').Image;

module.exports = {
    create(fileName) {
        // return Image.create({
        //     name: fileName,
        // })
        // .then(function(data) {
        //     return data;
        // });
    },
    getAll() {
        return Image.findAll(
        )
        .then(function(data) {
            return data;
        });
    }
}