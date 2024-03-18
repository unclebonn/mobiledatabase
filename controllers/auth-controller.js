const generateToken = require("../authentication-utils/jwt-sign")
const { Cart } = require("../models/cart")
const { Customer } = require("../models/customer")

exports.login = async (req, res, next) => {

    const { uid } = req.body
    const customer = await Customer.findOne({ uid });
    const cart = await Cart.findOne({ customer: customer.id })



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
                    customer,
                    cart,
                    success: true,
                    token: token,
                    message: "Login success"
                }
            })
        }

    }
}

