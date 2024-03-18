const { default: mongoose } = require("mongoose")
const { Cart } = require("../models/cart")
const { CartDetail } = require("../models/cart-detail")
const { Customer } = require("../models/customer")


exports.createCart = async (req, res, next) => {
    const customer = { customer: mongoose.Types.ObjectId(req.body.customer), }
    const data = await Cart.create(customer)

    res.status(201).json({
        data: data,
        message: "Create cart succesfully"
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
    const customerId = req.params.id // nhan vao id customer de tim san pham chi tiet trong gio hang
    console.log("customerID", customerId);

    const data = await CartDetail.find({}).populate("cart").populate("product").exec((err, cartDetail) => {
        console.log(cartDetail);
        if (err) {
            res.json({
                message: "There is something wrong"
            })
        } else {
            const data = cartDetail.filter((cartDetail) => cartDetail.cart?.customer == customerId && cartDetail.status == "pending");

            res.status(200).json({
                data
            })
        }
    })





}