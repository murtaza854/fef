const router = require('express').Router();
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const storageSmallAboutUs = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('../client/public/aboutUsSmall'))
        // cb(null, path.resolve('./build/aboutUsSmall'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const uploadSmallAboutUs = multer({ storage: storageSmallAboutUs });

const storageMessageFromFounder = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('../client/public/messageFromFounder'))
        // cb(null, path.resolve('./build/messageFromFounder'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const uploadMessageFromFounder = multer({ storage: storageMessageFromFounder });

router.get('/get-meal-counter', async (req, res) => {
    const arrayMeal = fs.readFileSync('mealCounter.txt').toString().split(' SEP1212 ');
    res.json({ mealCounter: arrayMeal[0], mealCounterDate: arrayMeal[1] });
});

const storageProfile = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('../client/public/profile'))
        // cb(null, path.resolve('./build/profile'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const uploadProfile = multer({ storage: storageProfile });

const storageMessageFromFounderBig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('../client/public/messageFromFounderBig'))
        // cb(null, path.resolve('./build/messageFromFounderBig'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const uploadMessageFromFounderBig = multer({ storage: storageMessageFromFounderBig });

const storageStory = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('../client/public/story'))
        // cb(null, path.resolve('./build/story'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const uploadStory = multer({ storage: storageStory });

router.get('/get-meal-counter', async (req, res) => {
    const arrayMeal = fs.readFileSync('mealCounter.txt').toString().split(' SEP1212 ');
    res.json({ mealCounter: arrayMeal[0], mealCounterDate: arrayMeal[1] });
});

router.get('/get-future-text', async (req, res) => {
    const futureText = fs.readFileSync('futureText.txt').toString();
    const getInvolvedText = fs.readFileSync('getInvolved.txt').toString();
    const galleryText = fs.readFileSync('gallery.txt').toString();
    const newsEventsText = fs.readFileSync('newsEvents.txt').toString();
    res.json({ futureText, getInvolvedText, galleryText, newsEventsText });
});

router.get('/get-small-about-us', async (req, res) => {
    const smallAboutUsText = fs.readFileSync('smallAboutUsText.txt').toString();
    const aboutUsImagePath = fs.readFileSync('aboutUsSmallImage.txt').toString();
    res.json({ smallAboutUsText, aboutUsImagePath });
});

router.get('/get-highlights', async (req, res) => {
    const highlights = fs.readFileSync('highlights.txt').toString();
    const bullets = fs.readFileSync('bullets.txt').toString();
    res.json({ highlights, bullets });
});

router.get('/get-message-from-founder', async (req, res) => {
    const messageFromFounderText = fs.readFileSync('messageFromFounderText.txt').toString();
    const messageFromFounderImagePath = fs.readFileSync('messageFromFounderImagePath.txt').toString();
    res.json({ messageFromFounderText, messageFromFounderImagePath });
});

router.get('/get-profile', async (req, res) => {
    const profileText = fs.readFileSync('profileText.txt').toString();
    const profileImagePath = fs.readFileSync('profileImagePath.txt').toString();
    const ourVision = fs.readFileSync('ourVision.txt').toString();
    const ourMission = fs.readFileSync('ourMission.txt').toString();
    const ourCredentials = fs.readFileSync('ourCredentials.txt').toString();
    const bankDetails = fs.readFileSync('bankDetails.txt').toString();
    res.json({ profileText, profileImagePath, ourVision, ourMission, ourCredentials, bankDetails });
});

router.get('/get-story', async (req, res) => {
    const storyText = fs.readFileSync('storyText.txt').toString();
    const storyImage = fs.readFileSync('storyImage.txt').toString();
    res.json({ storyText, storyImage });
});

router.get('/get-message-from-founder-big', async (req, res) => {
    const messageFromFounderBigText = fs.readFileSync('messageFromFounderBigText.txt').toString();
    const messageFromFounderBigImage = fs.readFileSync('messageFromFounderBigImage.txt').toString();
    res.json({ messageFromFounderBigText, messageFromFounderBigImage });
});

router.post('/meal-counter-set', async (req, res) => {
    fs.writeFileSync('mealCounter.txt', req.body.mealCounter.toString() + ' SEP1212 ' + req.body.mealCounterDate.toString());
    res.json({});
});

router.post('/future-text-set', async (req, res) => {
    fs.writeFileSync('futureText.txt', req.body.futureText.toString());
    fs.writeFileSync('getInvolved.txt', req.body.getInvolvedText.toString());
    fs.writeFileSync('gallery.txt', req.body.galleryText.toString());
    fs.writeFileSync('newsEvents.txt', req.body.newsEventsText.toString());
    res.json({});
});

router.post('/small-about-us-set', uploadSmallAboutUs.single('image'), async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);
        fs.writeFileSync('smallAboutUsText.txt', data.smallAboutUsText.toString());
        if (req.file) {
            fs.writeFileSync('aboutUsSmallImage.txt', `/aboutUsSmall/${req.file.filename}`);
            fs.unlinkSync(path.resolve('../client/public/' + data.oldFilePath.toString()));
            // fs.unlinkSync(path.resolve('./build/' + data.oldFilePath.toString()));
        }
        res.json({});
    } catch (error) {
        res.json({});
    }
});

router.post('/highlights-set', async (req, res) => {
    fs.writeFileSync('highlights.txt', req.body.highlight.toString());
    fs.writeFileSync('bullets.txt', req.body.bullets.toString());
    res.json({});
});

router.post('/message-from-founder-set', uploadMessageFromFounder.single('image'), async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);
        fs.writeFileSync('messageFromFounderText.txt', data.messageFromFounderText.toString());
        if (req.file) {
            fs.writeFileSync('messageFromFounderImagePath.txt', `/messageFromFounder/${req.file.filename}`);
            fs.unlinkSync(path.resolve('../client/public/' + data.oldFilePath.toString()));
            // fs.unlinkSync(path.resolve('./build/' + data.oldFilePath.toString()));
        }
        res.json({});
    } catch (error) {
        res.json({});
    }
});

router.post('/profile-set', uploadProfile.single('image'), async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);
        fs.writeFileSync('profileText.txt', data.profileText.toString());
        fs.writeFileSync('ourVision.txt', data.ourVision.toString());
        fs.writeFileSync('ourMission.txt', data.ourMission.toString());
        fs.writeFileSync('ourCredentials.txt', data.ourCredentials.toString());
        fs.writeFileSync('bankDetails.txt', data.bankDetails.toString());
        if (req.file) {
            fs.writeFileSync('profileImagePath.txt', `/profile/${req.file.filename}`);
            fs.unlinkSync(path.resolve('../client/public/' + data.oldFilePath.toString()));
            // fs.unlinkSync(path.resolve('./build/' + data.oldFilePath.toString()));
        }
        res.json({});
    } catch (error) {
        res.json({});
    }
});

router.post('/story-set', uploadStory.single('image'), async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);
        fs.writeFileSync('storyText.txt', data.storyText.toString());
        if (req.file) {
            fs.writeFileSync('storyImage.txt', `/story/${req.file.filename}`);
            fs.unlinkSync(path.resolve('../client/public/' + data.oldFilePath.toString()));
            // fs.unlinkSync(path.resolve('./build/' + data.oldFilePath.toString()));
        }
        res.json({});
    } catch (error) {
        res.json({});
    }
});

router.post('/message-from-founder-big-set', uploadMessageFromFounderBig.single('image'), async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);
        fs.writeFileSync('messageFromFounderBigText.txt', data.messageFromFounderBigText.toString());
        if (req.file) {
            fs.writeFileSync('messageFromFounderBigImage.txt', `/story/${req.file.filename}`);
            fs.unlinkSync(path.resolve('../client/public/' + data.oldFilePath.toString()));
            // fs.unlinkSync(path.resolve('./build/' + data.oldFilePath.toString()));
        }
        res.json({});
    } catch (error) {
        res.json({});
    }
});

module.exports = router;
