const User = require('../models/userModel');

const signupUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists!' });

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Signup successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Signup failed', error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        res.json({ message: 'Login successful!', user });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};

module.exports = { signupUser, loginUser };
