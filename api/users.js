var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    lastLogin: String,
    email: {type: String, required: true}
});

UserSchema.index({username:1}, {unique:true});
UserSchema.index({email:1}, {unique:true});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

exports.get = function(data, cb){
	User.find({username: data.username, password: data.password}, function(err, user){
		if(err){
			console.log(err);
		}
		else{
			cb(user)
		}
	});
};

exports.checkUsername = function(name, cb){
	User.find({username: name}, function(err, users){
		if(err){
			console.log(err);
		}
		else{
			if(users.length > 0){
				cb(false);
			}
			else{
				cb(true);
			}
		}
	});
};

exports.create = function(data, cb){
	bcrypt.hash(data.password, null, null, function(err, hash) {
		if(err){
			console.log(err);
		}
		else{
			data.password = hash;
			var user = new User(data);
			user.save(function(err, entry){
				if(err){
					console.log(err);
				}
				else{
					cb(entry);
				}
			});
		}	
	});
}