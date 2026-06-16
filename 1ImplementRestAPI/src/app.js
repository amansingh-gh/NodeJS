const express = require('express')

const app = express()
app.use(express.json())

const notes = []

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({message: "Notes created successfully"})
})

app.get('/notes',(req,res)=>{
    res.status(200).json({message:"Notes fetched successfully",
        notes: notes
    })
})

app.delete('/notes/:index',(req,res)=>{
    const index = parseInt(req.params.index)
    delete notes[index]
    res.status(200).json({message: `Item at index ${index} deleted`})
})

app.patch('/notes/:notes',(req,res)=>{
    const idx = parseInt(req.params.notes)
    const description = req.body.description

    notes[idx].description = description

    res.status(200).json({message: "Description updated"})
})

module.exports=app