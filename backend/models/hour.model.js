const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//TODO: Add photos and add-ons 
const hourSchema = new Schema({
    Monday: {type: Boolean, required: true},
    MondayOpenTime: {type: String},
    MondayCloseTime: {type: String},
    Tuesday: {type: Boolean, required: true},
    TuesdayOpenTime: {type: String},
    TuesdayCloseTime: {type: String},
    Wednesday: {type: Boolean, required: true},
    WednesdayOpenTime: {type: String},
    WednesdayCloseTime: {type: String},
    Thursday: {type: Boolean, required: true},
    ThursdayOpenTime: {type: String},
    ThursdayCloseTime: {type: String},
    Friday: {type: Boolean, required: true},
    FridayOpenTime: {type: String},
    FridayCloseTime: {type: String},
    Saturday: {type: Boolean, required: true},
    SaturdayOpenTime: {type: String},
    SaturdayCloseTime: {type: String},
    Sunday: {type: Boolean, required: true},
    SundayOpenTime: {type: String},
    SundayCloseTime: {type: String},
}, {timestamps:true});

const hour = mongoose.model("Hour", hourSchema);

module.exports = hour;
