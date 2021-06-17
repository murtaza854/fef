const Image = require('../models').Image;
const ImageCategory = require('../models').ImageCategory;

module.exports = {
    create(fileName, id) {
        return Image.create({
            name: fileName,
            imageCategoryID: parseInt(id)
        })
        .then(function(data) {
            return data;
        });
    },
    getAllByIds(id) {
        const getIds = id.split(',');
        const result = getIds.map(function (x) { 
            return parseInt(x); 
        });
        return Image.findAll({
            where: {
                id: result
            },
        })
        .then(function(data) {
            return data;
        });
    },
    getAll() {
        return Image.findAll({
            include: [
                {model: ImageCategory, as: 'imageCategory'}
            ],
            // attributes: ['id', 'name']
        })
        .then(function(data) {
            // console.log(Sequelize.getValues(data));
            console.log(data);
            return data;
        });
    }
}