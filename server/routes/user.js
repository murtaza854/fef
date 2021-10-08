const router = require('express').Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const crypto = require("crypto");
const userController = require('../controllers').user;
dotenv.config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    "340322946694-qf5a65ne8rbbam60r6tspti88sfd5aef.apps.googleusercontent.com", // ClientID
    "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", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: "1//04GNgytJGoTfbCgYIARAAGAQSNwF-L9IrDX1hv9S4TaJNBQ8DjB9bgfwtE00LW86I2DgBOxzpYMAwAKiaEq_KZrtFY1pU_qpHdY8"
});

router.post('/send-email', async (req, res) => {
    try {
        const accessToken = oauth2Client.getAccessToken();
        const smtpTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "fortifyeducation79@gmail.com",
                pass: "fortify2020",
                clientId: "340322946694-qf5a65ne8rbbam60r6tspti88sfd5aef.apps.googleusercontent.com",
                clientSecret: "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",
                refreshToken: "1//04GNgytJGoTfbCgYIARAAGAQSNwF-L9IrDX1hv9S4TaJNBQ8DjB9bgfwtE00LW86I2DgBOxzpYMAwAKiaEq_KZrtFY1pU_qpHdY8",
                accessToken: accessToken
            }
        });
        const mailOptions = {
            from: "fortifyeducation79@gmail.com",
            to: "murtazashafi11@gmail.com",
            subject: "Contact Form response",
            generateTextFromHTML: true,
            html: `<h1>Form submitted!</h1>
        <p>Details:<br></p>
        <p><b>Name</b><br>${req.body.name}<br><b>Email</b><br>${req.body.email}<br><b>Phone number<br></b>${req.body.phone}<br><b>Company<br></b>${req.body.company}<br><b>Message<br></b>${req.body.message}</p>`
        };

        smtpTransport.sendMail(mailOptions, (error, response) => {
            error ? console.log(error) : console.log(response);
            smtpTransport.close();
        });
        res.json({ data: true });
    } catch (error) {
        res.json({ data: false });
    }
});

router.post('/login', async (req, res) => {
    let findUser = await userController.findByEmail(req.body.email, null);
    if (!findUser) {
        return res.status(404).send({
            loggedIn: false
        })
    } else {
        const user = findUser.get({ plain: true });
        const salt = user.salt;
        const userHash = user.password;
        const password = req.body.password;
        const hash = crypto.pbkdf2Sync(password, salt, parseInt(process.env.ITERATIONS), 64, process.env.HASH_ALGORITHM).toString(`hex`);
        if (userHash !== hash) {
            res.json({
                loggedIn: false
            });
        } else {
            const token = generateAccessToken(user.id, user.name, req.body.email, user.superuser);
            res.status(200)
                .cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'lax' })
                .json({ loggedIn: true, token: req.cookies['token'] });
        }
    }
});

router.get('/loggedIn', async (req, res) => {
    try {
        const cookie = req.cookies['token'];

        const claims = jwt.verify(cookie, process.env.TOKEN_SECRET);
        if (!claims) {
            return res.status(401).send({ loggedIn: false });
        }
        res.status(200).send({ loggedIn: true });
    } catch (e) {
        return res.status(401).send({
            loggedIn: false
        });
    }
});

router.post('/logout', (req, res) => {
    res.cookie('token', '', { maxAge: 0, sameSite: 'lax' })

    res.send({
        message: 'success'
    })
})

router.get('/TableData', async (req, res) => {
    const user = await userController.getAll();
    if (!user) res.json({ data: [] });
    else res.json({ data: user });
});

router.post('/add', async (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const contactNumber = req.body.contactNumber;
    const organization = req.body.organization;
    const role = req.body.role;
    const emailVerified = false;
    const adminApproved = req.body.adminApproved;
    const newsletter = req.body.newsletter;
    const volunteer = req.body.volunteer;
    const password = req.body.password;
    const salt = crypto.randomBytes(16).toString('hex');
    const superuser = false;
    const hash = crypto.pbkdf2Sync(password, salt, parseInt(process.env.ITERATIONS), 64, process.env.HASH_ALGORITHM).toString(`hex`);
    const data = await userController.create({ name: name, email: email, contactNumber: contactNumber, organization: organization, role: role, emailVerified: emailVerified, adminApproved: adminApproved, newsletter: newsletter, volunteer: volunteer, password: hash, salt: salt, superuser: superuser })
    if (!data) res.json({ data: [] });
    else res.json({ data: 'success' });
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
    return jwt.sign({ id: id, name: name, email: email, superuser: superuser }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
}

module.exports = router;
