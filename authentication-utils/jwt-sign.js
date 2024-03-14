const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()
const generateToken = (uid) => {
    const token = jwt.sign({
        uid: uid
    },
        process.env.SECRET_KEY,
        {
            expiresIn: "10h",
        }
    )

    return token
}


module.exports = generateToken