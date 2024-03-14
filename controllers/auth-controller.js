const generateToken = require("../authentication-utils/jwt-sign")

exports.login = async (req, res, next) => {
    const { uid } = req.body
    if (uid == null) {
        res.json({
            data: {
                success: false,
                message: "Login failed"

            }
        })
    }

    else {
        const token = generateToken(uid)
        if (token) {
            res.json({
                data: {
                    success: true,
                    token: token,
                    message: "Login success"
                }
            })
        }

    }
}

