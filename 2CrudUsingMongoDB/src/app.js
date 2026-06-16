const express = require('express')
const app = express()
const noteModel = require('./model/note.model')

app.use(express.json())

app.post('/notes', async (req, res) => {
    const data = req.body;
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({ message: "Note Created" })
})

app.get('/notes', async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id
    const delNote = await noteModel.deleteOne({ _id: id })
    res.status(201).json({
        message: "Note deleted",
        notes: delNote
    })
})


app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id
    const desc = req.body.description
    const updateDesc = await noteModel.findOneAndUpdate(
        { _id: id },
        { description: desc },
        { new: true })

    res.status(200).json({
        message: "Note Updated Successfully",
        note: updateDesc
    })
})

module.exports = app 