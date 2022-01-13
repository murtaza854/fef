const router = require('express').Router();
const fs = require('fs');

router.get('/get-all-data', async (req, res) => {
    const arrayMeal = fs.readFileSync('mealCounter.txt').toString().split(' SEP1212 ');
    const futureText = fs.readFileSync('futureText.txt').toString();
    const getInvolvedText = fs.readFileSync('getInvolvedText.txt').toString();
    const galleryText = fs.readFileSync('galleryText.txt').toString();
    const newsEventsText = fs.readFileSync('newsEventsText.txt').toString();
    const smallAboutUsText = fs.readFileSync('smallAboutUsText.txt').toString();
    const smallFounderMessageText = fs.readFileSync('smallFounderMessageText.txt').toString();
    res.json({ mealCounter: array[0], mealCounterDate: array[1], futureText: futureText, getInvolvedText: getInvolvedText, galleryText: galleryText, newsEventsText: newsEventsText, smallAboutUsText: smallAboutUsText, smallFounderMessageText: smallFounderMessageText });
});

router.post('/meal-counter-set', async (req, res) => {
    fs.writeFileSync('mealCounter.txt', req.body.mealCounter.toString() + ' SEP1212 ' + req.body.mealCounterDate.toString());
    res.json({});
});

router.post('/future-text-set', async (req, res) => {
    fs.writeFileSync('futureText.txt', req.body.futureText.toString());
    res.json({});
});

router.post('/get-involved-text-set', async (req, res) => {
    fs.writeFileSync('getInvolvedText.txt', req.body.getInvolvedText.toString());
    res.json({});
});

router.post('/gallery-text-set', async (req, res) => {
    fs.writeFileSync('galleryText.txt', req.body.galleryText.toString());
    res.json({});
});

router.post('/news-events-text-set', async (req, res) => {
    fs.writeFileSync('newsEventsText.txt', req.body.newsEventsText.toString());
    res.json({});
});

router.post('/small-about-us-text-set', async (req, res) => {
    fs.writeFileSync('smallAboutUsText.txt', req.body.smallAboutUsText.toString());
    res.json({});
});

router.post('/small-founder-message-text-set', async (req, res) => {
    fs.writeFileSync('smallFounderMessageText.txt', req.body.smallFounderMessageText.toString());
    res.json({});
});

module.exports = router;
