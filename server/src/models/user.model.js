const {Schema, model} = require("mongoose");
var bcrypt = require('bcryptjs');



const userSchema = new Schema(
    {
        name : { type: String, 
            required: true, 
            unique: true
        },
        myList : [
            
        ],
        email : {
            type : String,
            required : true, 
            unique: true
        },
        password : {
            type : String,
            required : true
        }
    },
    {
        versionKey: false,
        timestamps : true
    }
);

userSchema.pre("save", function(next){

    if( !this.isModified("password")){
        return next()
    }

    const hash = bcrypt.hashSync(this.password , 8);

    this.password = hash;
    return next()
})


userSchema.methods.checkPassword = (password)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.compare( password, this.password, function(err, same){
            if( err) return reject(err)
            return resolve( same)
        })
    })
}


module.exports = model("user", userSchema)