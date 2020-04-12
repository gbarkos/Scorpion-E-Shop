var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: { type:String, required:true },
	email:    { type:String, required:true },
	password:String
});
UserSchema.methods.validPassword = function( pwd ) {
    // EXAMPLE CODE!
    return ( this.password === pwd );
};

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);