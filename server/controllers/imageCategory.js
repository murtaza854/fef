const ImageCategory = require('../models').ImageCategory;
const Image = require('../models').Image;

module.exports = {
    create(params) {
        return ImageCategory.create({
            name: params.name,
        })
        .then(function(data) {
            return data;
        });
    },
    update(params) {
        const id = params.id;
        updateValues = {
            name: params.name,
        }
        return ImageCategory.update(updateValues, { where: { id: id } }).then((result) => {
            // here your result is simply an array with number of affected rows
            return result
        });
    },
    getAll() {
        return ImageCategory.findAll()
        .then(function(data) {
            return data;
        });
    },
    getAllByIds(id) {
        const getIds = id.split(',');
        const result = getIds.map(function (x) { 
            return parseInt(x); 
        });
        return ImageCategory.findAll({
            where: {
                id: result
            },
            include: [
                {model: Image, as: 'images'}
            ],
        })
        .then(function(data) {
            return data;
        });
    },
    delete(ids) {
        return ImageCategory.destroy({ where: { id: ids }})
        .then(function (data) {
            return 'success';
        });
    }
}