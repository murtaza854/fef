const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
dotenv.config();
const app = express();
// const port = 4000;
const port = 3001;

app.use(cookieParser(
  process.env.COOKIE_SECRET
));
app.use(cors({
  credentials: true,
  origin: [process.env.API_URL1, process.env.API_URL2]
  // origin: [process.env.API_URL3]
}));

const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/projects');
const imageRoutes = require('./routes/images');
const imageCategoryRoutes = require('./routes/imageCategory');
const newsletterRoutes = require('./routes/newsletter');
const donationRoutes = require('./routes/donation');


const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  // port: 3306,
  // dialect: 'mysql',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
})
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

app.use(express.json());
app.use('/login123', (req, res) => {
    res.send({
        token: 'test123'
    });
});
app.use(express.static(path.join(__dirname, '../client/build')));

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  "340322946694-qf5a65ne8rbbam60r6tspti88sfd5aef.apps.googleusercontent.com", // ClientID
  "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", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: "1//04GNgytJGoTfbCgYIARAAGAQSNwF-L9IrDX1hv9S4TaJNBQ8DjB9bgfwtE00LW86I2DgBOxzpYMAwAKiaEq_KZrtFY1pU_qpHdY8"
});
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
  subject: "Node.js Email with Secure OAuth",
  generateTextFromHTML: true,
  html: "<b>test</b>"
};

smtpTransport.sendMail(mailOptions, (error, response) => {
  error ? console.log(error) : console.log(response);
  smtpTransport.close();
});

// app.get('/sitemap.xml', function(req, res) {
//   res.sendFile(__dirname + '/sitemap.xml');
// });

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/image-category', imageCategoryRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/donation', donationRoutes);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})