const router = require('express').Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userController = require('../controllers').user;
const e = require('express');
dotenv.config();

router.post('/admin/login', async (req, res) => {
    console.log(req.body);
    const user = await userController.findByEmail(req.body.email, null);
    if (!user) {
        return res.status(404).send({
            loggedIn: false
        })
    }
    if (user.dataValues.password !== req.body.password) {
        res.send({
            loggedIn: false
        });
    }
    const token = generateAccessToken(user.dataValues.id, req.body.email);
    // const token = jwt.sign({_id: user.dataValues.id}, "secret");
    res.status(200)
        .cookie('token', token, {httpOnly: true})
        .json({loggedIn: true, token: req.cookies['token']});
    
        // console.log(req.cookies['token']);

    // res.cookie('jwt', token, {
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000 // 1 day
    // });
});

router.get('/admin/loggedIn', async (req, res) => {
    try {
        const cookie = req.cookies['token'];

        const claims = jwt.verify(cookie, process.env.TOKEN_SECRET);
        if (!claims) {
            return res.status(401).send({loggedIn: false});
        }
        res.status(200).send({loggedIn: true});
    } catch (e) {
        return res.status(401).send({
            loggedIn: false
        });
    }
});

router.post('/admin/logout', (req, res) => {
    res.cookie('token', '', {maxAge: 0})

    res.send({
        message: 'success'
    })
})

router.post('/set-darktheme', (req, res) => {
    // console.log(req.body);
    // window.localStorage.setItem('darktheme', req.body.darkState);
    res.cookie('darktheme', req.body.darkState, {maxAge: 10 * 365 * 24 * 60 * 60 * 1000})
    res.send({darktheme: cookie});
});

router.get('/get-darktheme', (req, res) => {
    try {
        const cookie = req.cookies['darktheme'];
        if (!cookie) {
            res.send({darktheme: false});
        } else {
            res.send({darktheme: cookie});
        }
    } catch (error) {
        res.send({darktheme: false});
    }
});

function generateAccessToken(id, email) {
    return jwt.sign({email: email, id:id}, process.env.TOKEN_SECRET, { expiresIn: '24h' });
  }

module.exports = router;
