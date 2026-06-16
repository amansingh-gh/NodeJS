const express = require("express")
const multer = require("multer")

const uploadFile = require('./service/uploadFile')
const postModel = require("./model/post.model")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({
    storage: multer.memoryStorage()
})

app.post(
    "/create-post",
    upload.single("image"),
    async (req, res) => {
        try {
            console.log(req.body)
            console.log(req.file)

            const result = await uploadFile(req.file.buffer)

            const post = await postModel.create({
                image: result.url,
                caption: req.body.caption
            })

            return res.status(201).json({
                success: true,
                message: "Post created successfully",
                data: result
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
)

app.get('/posts', async(req, res) => {
    const posts = await postModel.find()

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
})

module.exports = app