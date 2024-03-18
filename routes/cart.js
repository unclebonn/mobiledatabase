const express = require("express")
const { createCart, getCart } = require("../controllers/cart-controller")
const { checkTokenAccess } = require("../authentication-utils/jwt-verfification")
const cartRouter = express.Router()


cartRouter
    .route("/create")
    .post(createCart)
cartRouter
    .route("/:id")
    .get(checkTokenAccess, getCart)


exports.cartRouter = cartRouter