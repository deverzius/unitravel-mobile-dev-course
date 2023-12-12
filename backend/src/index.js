const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes')
const constants = require('./constants')

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
// app.use(`${constants.USER_ENDPOINT}`, userRoutes);
app.use(`${constants.AUTH_ENDPOINT}`, authRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
