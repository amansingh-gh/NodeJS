const express = require('express')
const router = express.Router()
const Person = require('./../models/person')
const { jwtAuthMiddleware, generateToken } = require('../jwt')

// GET method
router.get('/', jwtAuthMiddleware,async (req, res) => {
    try {
        const data = await Person.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ err: "Fetching Failed" })
    }
})

// POST Method
router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const newEmp = new Person(data);
        const response = await newEmp.save();

        console.log("Data Saved");

        const payload = {
            id: response.id,
            username: response.username
        }

        const token = generateToken(payload)
        console.log("Token is: ", token);
        res.status(200).json({ response: response, token: token })

    } catch (err) {
        res.status(500).json({ err: "Something Wrong" })
    }
})

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;  // extract username and password
        const user = await Person.findOne({ username: username }); //find user by username

        

        if(!user){
            return res.status(401).json({err:"Invalid Username"})
        }
        else if(!(await user.comparePassword(password))){
            return res.status(401).json({err:"Invalid Username"})

        }
        // generate token
        const payload = {
            id: user.id,
            username: user.username
        }

        const token = generateToken(payload)
        res.json({ token })

    } catch (err) {
        res.status(500).json({ err: "Something went wrong while login" })
    }
})

router.get('/profile',jwtAuthMiddleware , async (req,res)=>{
    try{
        const userData = req.user;
        console.log("User Data: ", userData);
        
        const userID = userData.id
        const user = await Person.findById(userID)
        res.status(200).json({user})

    }catch(err){
        res.status(500).json({ err: "Something went wrong while login" })
        }

})

// params
router.get('/:name', async (req, res) => {
    try {
        const perName = req.params.name;
        const response = await Person.find({ name: perName })
        console.log("Person Fetched");
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ err: "Something Went Wrong" })
    }
})

// PUT Method
router.put('/:id', async (req, res) => {
    try {
        const personID = req.params.id;
        const updatePerson = req.body;
        const response = await Person.findByIdAndUpdate(personID, updatePerson, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(404).json({ error: "Person not found" })
        }
        console.log("Person Data Update");
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(404).json({ err: "Something Went Wrong" })
    }
})

// Delete Method
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.send(404).json({ err: "Person not Found" });
        }
        console.log("Person Data Delete");
        res.status(200).json({ message: "Deleted" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Something went wrong" })
    }
})

module.exports = router;