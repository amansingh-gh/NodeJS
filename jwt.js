const jwt = require('jsonwebtoken')

const jwtAuthMiddleware = async (req, res, next) => {

    // first check the request header has authorization or not
    const authorization = req.headers.authorization
    if (!authorization) return res.status(401).json({ err: "Token not Found" })

    const token = await req.headers.authorization.split(' ')[1];

    if (!token) return res.status(401).json({ err: "Token Not Found" });

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode
        next();

    } catch (err) {
        res.status(500).json({ err: "Something went wrong in JWT" });
    }
}

// Function to generate tokens
const generateToken = (userdata) => {
    return jwt.sign({userdata}, process.env.JWT_SECRET, { expiresIn: 90000 })
}

module.exports = {
    jwtAuthMiddleware,
    generateToken
} 