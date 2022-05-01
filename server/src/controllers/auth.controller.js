var jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
var bcrypt = require('bcryptjs');
const User = require("../models/user.model");
dotenv.config();



const newToken = (user)=>{
    return jwt.sign({user : user},process.env.JWT_ACCESS_KEY )
}

const register = async(req, res)=>{
    try{
        let user = await User.findOne({
            email : req.body.email
        }).lean().exec();

        if( user){
          return  res.status(400).json({
                status : "failed",
                message : " User already exist"
            })
        }
        else{
            user = await User.create(req.body);
        
            const token = newToken(user)
    
        return  res.status(201).send({
                data : {
                    user, token
                }
                    })
        }
    }
    catch(e){
     return   res.status(500).json({
            status : "failed",
            message : e.message
        })
    }    
}

const login = async(req, res)=>{
    // check if email provided already exist 
    // if it does not exist throw error 
    //else we match the password 
    // if not match then throw error
    // if it matches then create token
    // return user and token

    try{

    let user = await User.findOne({
        email : req.body.email
    })

    if( !user){
        return res.status(400).json({
            status : "failed",
            message : "user not found"
        })
    }
    console.log(user);

    // const match = await user.checkPassword(req.body.password);

    // if( !match){
    //     return res.status(400).json({
    //         status : "failed",
    //         message : "Please provide correct email or password"
    //     })
    // }

    //  const token = newToken(user);

    //    return res.status(201).json(
    //        {user, token}
    //    )

      
    if (user && (await bcrypt.compare(
        req.body.password
        , user.password))) {
        
        const token = newToken(user);

       return res.status(201).json({
            user, token
        });
      }
      return   res.status(400).send("Invalid Credentials");
  
      
   
}
catch(e){
   return res.status(500).json({
        status : "failed",
        message : e.message
    })

}
}

module.exports = {register, login}