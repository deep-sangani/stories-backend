
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    selectedfile : String,
    likeCount : {
        type : Number,
        default:0
    }

},{timestamps:true})

module.exports = mongoose.model("Model",PostSchema,"Posts")
