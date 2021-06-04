const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Sequelize = require('sequelize');
const app = express();
const port = 4000;

const userRoutes = require('./routes/user');

app.use(cookieParser());
app.use(cors());


const sequelize = new Sequelize('fef', 'root', 'Omzig123_MFS', {
  host: 'localhost',
  port: 3305,
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

app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})