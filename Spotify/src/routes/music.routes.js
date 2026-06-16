const express = require('express')
const musicController = require('../controller/music.controller');
const authMiddleware = require('../middleware/auth.middleware');
const multer = require('multer')


const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router();

router.post('/upload', upload.single('music'), musicController.createMusic)
router.post('/album', authMiddleware.authArtist, musicController.albumCreate)
router.get('/', authMiddleware.authUser, musicController.getAllMusics)
router.get('/albums', authMiddleware.authUser, musicController.getAllAlbums)
router.get('/albums/:albumId', authMiddleware.authUser, musicController.getAlbumsById)

module.exports = router;