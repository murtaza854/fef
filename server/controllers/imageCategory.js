const ImageCategory = require('../models').ImageCategory;

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
        console.log(params);
        updateValues = {
            name: params.name,
        }
        return ImageCategory.update(updateValues, { where: { id: id } }).then((result) => {
            // here your result is simply an array with number of affected rows
            console.log(result);
            return result
        });
    },
    getAll() {
        return ImageCategory.findAll()
        .then(function(data) {
            return data;
        });
    },
    getAllByIds(id, Op) {
        const getIds = id.split(',');
        const result = getIds.map(function (x) { 
            return parseInt(x); 
        });
        console.log(result);
        console.log(Op);
        return ImageCategory.findAll({
            where: {
                id: result
            }
        })
        .then(function(data) {
            return data;
        });
    },
    delete(ids) {
        console.log(ids);
        return ImageCategory.destroy({ where: { id: ids }})
        .then(function (data) {
            return 'success';
        });
    }
}