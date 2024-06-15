const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.getAllUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(500).json({error: 'User not found!'});
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, confirm } = req.body;

        if (password !== confirm) {
            return res.status(400).json({error: 'Password do not match!'});
        }

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        });
        
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error: error.errors[0].message});
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(user) {
            await user.update(req.body);
            res.json(user);
        } else {
            res.status(404).json({error: "User not found"});
        }
    } catch (error) {
        res.status(500).json({error: error.errors[0].message})
    }
}

exports.deleteUsers = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(user) {
            await user.destroy(req.body);
            res.json(user);
        } else {
            res.status(404).json({error: "User not found"});
        }
    } catch (error) {
        res.status(500).json({error: error.errors[0].message})
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        const { oldPassword, newPassword } = req.body;
        if (user) {
            const compare = await bcrypt.compare(oldPassword, user.password);
            console.log(compare);
            if (compare) {
                const salt = await bcrypt.genSalt(12);
                const hashedPassword = await bcrypt.hash(newPassword, salt);
                await user.update({
                    password: hashedPassword,
                });
                res.json(user);
            } else {
                res.json({error: "Password do not match"});
            }
        } else {
            res.status(404).json({error: "User not found"});
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: { username: username }
        });
        if(user) {
            const compare = await bcrypt.compare(password, user.password);
            if (!compare) {
                res.status(401).json({error: "Wrong Password"});
            } else {
                res.json({pesan: "Login successful"});
                req.user = user;
            }
        } else {
            res.status(404).json({error: "Username not found"});
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
}