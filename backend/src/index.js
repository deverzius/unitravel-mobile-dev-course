const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')
const constants = require('./constants')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use(`${constants.USER_ENDPOINT}`, userRoutes);
app.use(`${constants.AUTH_ENDPOINT}`, authRoutes);


const port = 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
