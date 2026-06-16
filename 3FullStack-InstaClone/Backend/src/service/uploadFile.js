const ImageKit = require("imagekit")

const imagekit = new ImageKit({
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.URL_END_POINT
})

async function uploadFile(buffer) {

    const result = await imagekit.upload({
        file: buffer.toString("base64"),
        fileName: `image-${Date.now()}.jpg`
    })

    return result
} 

module.exports = uploadFile