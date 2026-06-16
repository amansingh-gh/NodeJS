const jwt = require('jsonwebtoken')

async function authArtist(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }


    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'artist') {
            return res.status(403).json({ message: "Your don't have access" })
        }
        req.user = decoded
        next()

    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}

async function authUser(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'user') {
            return res.status(403).json({ message: "Your don't have access because this enpoint is only for users" })
        }
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" })
    }

}

module.exports = { authArtist, authUser }