var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var User = new Schema({
    user_id: String,
    user_name : String,
    private_channel:String
})


module.exports = mongoose.model("user",User);


