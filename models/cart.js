const mongoose = require('mongoose');

// const Schema = mongoose.Schema

const cart = (oldCart)=>{
    this.items = oldCart.items,
    this.totalQty = oldCart.totalQty;
    this.totalPrice = oldCart.totalPrice;

    this.add = function(item,id) {
        var storedItem =  this.items[id];
        if(!storedItem) {
            storedItems = this.items[id] = {item:item, qty:0, price:0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice+= storedItem.price;
    }

    this.generateArray = function(){
        var arr =[];
        for (var id in this.items) {
            arr.push(this.items[id])
        }
        return arr;
    }
} 
//     {
//     product: String,
//     inStock: Boolean,
//     quantity: Number,
//     img: String,
//     inCart: {type:Boolean, default:true},
//     price: String,
//     subTotal: String
//     },
//     {timestamps: true},
// )

// const cart = mongoose.model('cart', cartSchema)
module.exports = cart