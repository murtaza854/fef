const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 4000;

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


const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  port: 3306,
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

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/image-category', imageCategoryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})