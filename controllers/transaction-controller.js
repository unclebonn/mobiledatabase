const { Cart } = require("../models/cart");
const { CartDetail } = require("../models/cart-detail");
const { Transaction } = require("../models/transaction");

exports.createTransaction = async (req, res, next) => {
    const transactionCreate = await Transaction.create(req.body);

    // tìm các sản phẩm có trong giỏ hàng cập nhật lại status và thời gian được mua
    const filterCartDetail = await CartDetail.find({ cart: transactionCreate.cart, status: "pending" }).updateMany({ $set: { createAt: Date.now(), status: "success" } })
    res.status(201).json({
        filterCartDetail
    })
}


exports.getHistoryTransaction = async (req, res, next) => {
    const customerId = req.params.id

    const transactions = await Transaction.find({}).populate("cart")
        .exec((err, transaction) => {
            const filterTransactionBelongToCustomer = transaction.filter((tran) => tran.cart?.customer == customerId);
		console.log(filterTransactionBelongToCustomer);

            res.status(200).json({
                data: filterTransactionBelongToCustomer
            })
        })


}

exports.getHistoryTransactionDetail = async (req, res, next) => {
    const transactionId = req.params.id; //nhan vao id cua transaction do

    const isCartExisted = await Transaction.findById(transactionId).populate("cart").exec(async (err, transactionDetail) => {

        if (err) {
            res.json({
                meesage: "There is something wrong"
            })
        } else {
            console.log(new Date(transactionDetail.createAt));

            console.log(new Date(new Date(transactionDetail.createAt).getTime() + 2000));
            const cartdetail = await CartDetail.find({ status: "success", cart: transactionDetail.cart.id, createAt: { $gte: new Date(transactionDetail.createAt), $lte: new Date(new Date(transactionDetail.createAt).getTime() + 5000) } })
            // const cartDetailPaid = cartdetail.filter((cartdetail) => cartdetail.status == "success");
            res.status(200).json({
                data: cartdetail,
            })



        }

    })


}