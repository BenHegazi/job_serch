//  users logic

import { User } from "../models/user.model.js"


/**
 * @des update user
 * @method patch
 * @url  /user/:id
 */ 
export const updateuser = async (req , res) => {
    let user = await User.findOneAndUpdate({_id: req.params.id},req.body , {new : true})
res.ststus(200).json({message: "success " ,user })
}
    



/**
 * @des delete user
 * @method delete
 * @url  /user
 */ 
 
export  const deleteuser = async(req , res) =>{
    let user = await User.findByIdAndDelete(req.params , req.body )

    res.ststus(200).json({message : "success" , user})
}


/**
 * @des find one user
 * @method get
 * @url  /user/:id
 */ 
 export const findOne = async (req,res)=>{
    const user = await User.findById(req.params.id)
    // res here
    delete user._doc.password
    res.status(200).json(user)
 } 

/**
 * @des find all user
 * @method get
 * @url  /user
 */

export const allUser = async(req,res)=>{
    const users = await User.find()
    res,json(users)

}