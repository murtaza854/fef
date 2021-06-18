const router = require('express').Router();
const donationController = require('../controllers').donation;

router.get('/TableData', async (req, res) => {
    const dontations = await donationController.getAll();
    if (!dontations) res.json({data: []});
    else res.json({data: dontations});
});

module.exports = router;
