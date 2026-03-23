const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assume User is your model for users

// Login function
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' }); // Replace 'your_jwt_secret'
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Register function
exports.register = async (req, res) => {
    const { name, email, password, phone, role } = req.body;
    try {
        // Create a new user
        const user = new User({ name, email, password, phone, role });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
