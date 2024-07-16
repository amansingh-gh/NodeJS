const express = require('express')
const router = express.Router()
const Person = require('./../models/person')

// GET method
router.get('/', async (req, res) => {
    try {
        const data = await Person.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ err: "Fetching Failed" })
    }
})

// POST Method
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newEmp = new Person(data);
        const response = await newEmp.save();
        console.log("Data Saved");
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ err: "Something Wrong" })
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
router.put('/:id', async (req, res)=>{
    try{
        const personID = req.params.id;
        const updatePerson = req.body;
        const response = await Person.findByIdAndUpdate(personID, updatePerson,{
            new: true,
            runValidators: true
        })
        if(!response){
            return res.status(404).json({error: "Person not found"})
        }
        console.log("Person Data Update");
        res.status(200).json(response);

    }catch (err) {
        console.log(err);
        res.status(404).json({ err: "Something Went Wrong" })
    }
})

// Delete Method
router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.send(404).json({err: "Person not Found"});
        }
        console.log("Person Data Delete");
        res.status(200).json({message : "Deleted"})
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Something went wrong"})
    }
})

module.exports = router;