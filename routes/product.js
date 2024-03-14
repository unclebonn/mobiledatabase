var express = require("express");
var productRouter = express.Router();
const { createProduct, getAllProducts, getProductById } = require("../controllers/product-controller");
const { checkTokenAccess } = require("../authentication-utils/jwt-verfification");


productRouter
    .route("/")
    .get(getAllProducts)

productRouter
    .route("/create")
    .post(checkTokenAccess ,createProduct)

productRouter
    .route("/:id")
    .get(getProductById)


exports.productRouter = productRouter