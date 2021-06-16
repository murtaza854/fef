const router = require('express').Router();
const projectController = require('../controllers').project;

router.get('/TableData', async (req, res) => {
    const projects = await projectController.getAll();
    if (!projects) res.json({data: []});
    else res.json({data: projects});
});

module.exports = router;
