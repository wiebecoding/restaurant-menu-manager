const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//TODO: Add photos and add-ons 
const itemSchema = new Schema({
    itemname: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    show: {type: Boolean, required: true}
}, {timestamps:true});

const item = mongoose.model("Item", itemSchema);

module.exports = item;
