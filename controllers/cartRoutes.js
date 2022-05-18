const express =  require('express')

const cartRouter = express.Router();
const cart = require('../models/cart')

module.exports = cartRouter;