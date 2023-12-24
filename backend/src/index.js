const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');
const locationsRoutes = require('./routes/locations.routes');
const imageRoutes = require('./routes/image.routes');
const reviewsRoutes = require('./routes/reviews.routes');
const notisRoutes = require('./routes/notis.routes');
const routingRoutes = require('./routes/routing.routes');
const constants = require('./constants');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(`${constants.AUTH_ENDPOINT}`, authRoutes);
app.use(`${constants.USER_ENDPOINT}`, usersRoutes);
app.use(`${constants.LOCATION_ENDPOINT}`, locationsRoutes);
app.use(`${constants.IMAGE_ENDPOINT}`, imageRoutes);
app.use(`${constants.REVIEW_ENDPOINT}`, reviewsRoutes);
app.use(`${constants.NOTI_ENDPOINT}`, notisRoutes);
app.use(`${constants.ROUTING_ENDPOINT}`, routingRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
