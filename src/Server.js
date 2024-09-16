const express = require('express');
const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Replace with your MongoDB URI
const mongoURI = 'mongodb://localhost:27017/ERP';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('user', userSchema);

// Register route (optional, if you want to add users)
// app.get('/', async (req, res) => {
//     // const { email, password } = req.body;
//     // const hashedPassword = await bcrypt.hash(password, 10);

//     // try {
//     //     const user = new User({ email, password: hashedPassword });
//     //     await user.save();
//     //     res.status(201).send('User registered');
//     // } catch (error) {
//     //     res.status(400).send('Error registering user');
//     // }
//     res.send("App is Working");
// });

// Login route
app.post('/login', async (req, res) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            res.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }

    } catch (e) {
        res.send("Something Went Wrong");
    }
});

// Start the server
// const PORT = process.env.PORT || 3000;
app.listen(3000);



