const { default: mongoose } = require("mongoose")
const { Cart } = require("../models/cart")
const { CartDetail } = require("../models/cart-detail")
const { Customer } = require("../models/customer")


exports.createCart = async (req, res, next) => {
    const customer = { "customer": mongoose.Types.ObjectId(req.body.customer), }
    const data = await Cart.create(customer)

    res.status(201).json({
        message: "Create cart succesfully",
        data
    })
}

exports.getCart = async (req, res, next) => {
    const id = req.params.id
    const data = await Cart.findOne({ customer: id })
        .populate("customer")
        // .exec();

    console.log(data);

    res.status(200).json({
        data
    })
}

exports.getCartDetail = async (req, res, next) => {
    const id = req.params.id //cart id

    const customer = await Customer.findById(id)

    const cart = await Cart.findOne({customer: customer._id});

    const data = await CartDetail
        .find({ cart: cart._id })
        .populate("product").exec()

    res.status(200).json({
        customer: customer,
        data: data
    })

}