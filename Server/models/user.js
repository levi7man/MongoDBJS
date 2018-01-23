const mongoose = require('mongoose');
const validator = require('validator'); 
const jwt = require('jsonwebtoken');


var UserSchema= new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1, 
        unique: true,
        validate:{
            validator: (value)=>{
                return validator.isEmail(value);
            },
            message:'{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
        },
        tokens: [{
            access: {
                type: String,
                require: true
            },
            token:{
                require: true,
                type: String
            }
        }]
});


UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access},'abc123').toString();

    user.tokens.push({access, token});
    return user.save().then(()=>{
        return token;
    });
    
};

var User = mongoose.model('User', UserSchema);

module.exports= {User};
