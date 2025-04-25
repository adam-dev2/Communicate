const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')

const User = require('../models/User')


router.post('/register',async (req,res)=>{
    const {fullname, email,password} = req.body;
    try{
        const findUser = await User.findOne({email});
        if(findUser) {
            return res.status(400).json({message: 'User with this Email already Exists'});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({fullname, email,hashedPassword})

        await newUser.save();
        return res.status(200).json({message: 'Succesfully created User',user: newUser.fullname});
    }catch(err) {
        return res.status(500).json({message: `Error while creating user: ${err}`});
    }
})

router.post('/login',async(req,res)=>{

})

module.exports = router;