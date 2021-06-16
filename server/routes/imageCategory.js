const router = require('express').Router();
const imageCategory = require('../controllers').imageCategory;
const { Op } = require("sequelize");

router.get('/TableData', async (req, res) => {
    const imageCategories = await imageCategory.getAll();
    if (!imageCategories) res.json({data: []});
    else res.json({data: imageCategories});
});

router.get('/getByIds', async (req, res) => {
    let id = '';
    if ('id' in req.query) id = req.query.id;
    const imageCategories = await imageCategory.getAllByIds(id, Op);
    if (!imageCategories) res.json({data: []});
    else res.json({data: imageCategories});
});

router.post('/add', async (req, res) => {
    const data = await imageCategory.create(req.body);
    if (!data) res.json({data: []});
    else res.json({data: 'success'});
});

router.post('/update', async (req, res) => {
    const data = await imageCategory.update(req.body);
    if (!data) res.json({data: []});
    else res.json({data: 'success'});
});

router.post('/delete', async (req, res) => {
    const data = await imageCategory.delete(req.body.ids);
    if (!data) res.json({data: []});
    else res.json({data: 'success'});
});

module.exports = router;
