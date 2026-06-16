const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');

const userModel = require('../models/user.model');

router.post("/create-post", async (req, res) => {

    const token = req.cookies.token;

    if (!token) {

        return res.status(401).json({
            message: "Unauthorized"
        });

    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findOne({
            _id: decoded.id
        });

        console.log(user);
        res.status(201).json({
            message: "Post created",
            user
        });
    }

    catch (error) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

});

router.get("/users", async (req, res) => {

    const users = await userModel.find();

    res.json({ users });

});

module.exports = router;