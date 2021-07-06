const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
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
});app.use(express.static(__dirname + '/build'));

// app.get('/sitemap.xml', function(req, res) {
//   res.sendFile(__dirname + '/sitemap.xml');
// });

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/image-category', imageCategoryRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/donation', donationRoutes);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})