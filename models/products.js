const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productsSchema = new Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    inStock: Boolean,
    quantity: Number,
    img: String,
    
},
)

const products = mongoose.model('products', productsSchema)
module.exports = products

const consoles =[
    {
    console: 'Nintendo Entertainment System (NES)',
    company: 'Nintendo',
    releaseYear: '1985',
    },
    {
    console: 'Sega Master System',
    company: 'Sega',
    releaseYear: '1985',
    },
    {
    console: 'Super NES',
    company: 'Nintendo',
    releaseYear: '1990',
    },
    {
    console: 'Sega CD',
    company: 'Sega',
    releaseYear: '1991',
    },
    {
    console: 'Sega Genesis',
    company: 'Sega',
    releaseYear: '1988',
    },
    {
    console: 'Atari Jaguar',
    company: 'Atari',
    releaseYear: '1993',
    },
    {
    console: 'Sega Saturn',
    company: 'Sega',
    releaseYear: '1994',
    },
    {
    console: 'Sony Playstation',
    company: 'Sony',
    releaseYear: '1994',
    },
    {
    console: 'Nintendo 64',
    company: 'Nintendo',
    releaseYear: '1996',
    },
    {
    console: 'Dreamcast',
    company: 'Sega',
    releaseYear: '1998',
    },
    {
    console: 'Playstation 2',
    company: 'Sony',
    releaseYear: '2000',
    },
    {
    console: 'Nintendo Gamecube',
    company: 'Gamecube',
    releaseYear: '2001',
    },

]