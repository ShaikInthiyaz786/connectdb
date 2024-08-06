const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const passport = require('./middlewares/passport');
const swaggerConfig = require('./swagger/swaggerConfig');

dotenv.config();

const app = express();
app.use(express.json());
app.use(passport.initialize());

require('./routes/user')(app);
swaggerConfig(app);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
