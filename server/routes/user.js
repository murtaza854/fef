const router = require('express').Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const crypto = require("crypto");
const userController = require('../controllers').user;
dotenv.config();

router.post('/login', async (req, res) => {
    let findUser = await userController.findByEmail(req.body.email, null);
    if (!findUser) {
        return res.status(404).send({
            loggedIn: false
        })
    } else {
        const user = findUser.get({plain: true});
        const salt = user.salt;
        const userHash = user.password;
        const password = req.body.password;
        const hash = crypto.pbkdf2Sync(password, salt,  parseInt(process.env.ITERATIONS), 64, process.env.HASH_ALGORITHIM).toString(`hex`);
        if (userHash !== hash) {
            res.json({
                loggedIn: false
            });
        } else {
            const token = generateAccessToken(user.id, user.name, req.body.email, user.superuser);
            res.status(200)
            .cookie('token', token, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'lax'})
            .json({loggedIn: true, token: req.cookies['token']});
        }
    }
});

router.get('/loggedIn', async (req, res) => {
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

router.post('/logout', (req, res) => {
    res.cookie('token', '', {maxAge: 0, sameSite: 'lax'})

    res.send({
        message: 'success'
    })
})

router.get('/TableData', async (req, res) => {
    const user = await userController.getAll();
    if (!user) res.json({data: []});
    else res.json({data: user});
});

router.post('/add', async (req, res) => {
    console.log(req.body);
    const salt = crypto.randomBytes(64).toString('hex'); 
    // hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
    res.json({data: 'user'});
});

router.post('/set-darktheme', (req, res) => {
    // console.log(req.body);
    // // window.localStorage.setItem('darktheme', req.body.darkState);
    // res.cookie('darktheme', '', {maxAge: 0})
    // res.cookie('darktheme', req.body.darkState, {maxAge: 10 * 365 * 24 * 60 * 60 * 1000})
    // res.send({darktheme: req.body.darkState});
});

router.get('/get-darktheme', (req, res) => {
    // try {
    //     const cookie = req.cookies['darktheme'];
    //     res.cookie('darktheme', '', {maxAge: 0})
    //     if (!cookie) {
    //         res.send({darktheme: false});
    //     } else {
    //         res.send({darktheme: cookie});
    //     }
    // } catch (error) {
    //     res.send({darktheme: false});
    // }
});

function generateAccessToken(id, name, email, superuser) {
    return jwt.sign({id:id, name: name, email: email, superuser: superuser}, process.env.TOKEN_SECRET, { expiresIn: '24h' });
  }

module.exports = router;
