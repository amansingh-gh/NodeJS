const { ImageKit } = require('@imagekit/nodejs');

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    // publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    // urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file) {
    const result = await client.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "/spotify-backend/music"
    });

    return result;
}

module.exports = { uploadFile };