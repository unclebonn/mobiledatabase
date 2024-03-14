const config = require("dotenv")
const jwt = require("jsonwebtoken")

config.config()

exports.checkTokenAccess = (req, res, next) => {
    const tokenAccess = req.headers['x-access-token'] || req.headers['authorization'];
    if (tokenAccess) {
        jwt.verify(tokenAccess, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
}

