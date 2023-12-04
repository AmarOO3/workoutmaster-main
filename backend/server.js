const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');
const mongoPass = "ZNsFm6WKpJPmzHJ0";
const mongoURI = `mongodb+srv://amarjeetabdar:${mongoPass}@gymdata.rrq4us9.mongodb.net/?retryWrites=true&w=majority`;

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors()); // Use cors middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose.connect(mongoURI)
    .then(() => {
        // listen for requests
        app.listen(4000, () => {
            console.log("Connected to db. Listening on port " + 4000);
        });
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
