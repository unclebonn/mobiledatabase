const { Cart } = require("../models/cart")
const { CartDetail } = require("../models/cart-detail")

exports.createCartDetail = async (req, res, next) => {
    const request = req.body
    const data = await CartDetail.create(request)

    res.status(201).json({
        data
    })
}


exports.getAllCartDetails = async (req, res, next) => {
    const data = await CartDetail.find({})
    res.status(200).json({
        data
    })
}