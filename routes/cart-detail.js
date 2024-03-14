const express = require("express")
const cartDetailRouter = express.Router()
const { checkTokenAccess } = require("../authentication-utils/jwt-verfification")
const { createCartDetail, getAllCartDetails } = require("../controllers/cart-detail-controller")
const { getCartDetail } = require("../controllers/cart-controller")


cartDetailRouter
    .route("/create")
    .post(checkTokenAccess, createCartDetail)

cartDetailRouter
    .route("/")
    .get(checkTokenAccess, getAllCartDetails)

cartDetailRouter
    .route("/detail/:id")
    .get(checkTokenAccess,getCartDetail)


exports.cartDetailRouter = cartDetailRouter