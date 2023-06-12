const {v4:uuid} = require('uuid')

let users = []


/* get all users */

exports.getUsers = (req,res)=>{
    res.status(200).send(users)

}


/* post user */
exports.createUsers = (req,res)=>{
   const user = req.body
   
   users.push({...user, id:uuid()})
   res.status(201).send('User Added Successfully')
}


/* getUser */

exports.getUser = (req,res)=>{
 const singleUser = users.filter((user)=> user.id === req.params.id )
  res.status(302).send(singleUser);
}


/* delete users */


exports.deleteUser = (req,res)=>{
    users = users.filter((user)=> user.id !== req.params.id )
    res.status(200).send('User Deleted Successfully')
}

/* update users */

exports.updateUser = (req,res)=>{
     const user = users.find((user)=> user.id === req.params.id);
     user.name = req.body.name;
     user.email= req.body.email;
     user.contact = req.body.contact;

     res.send("User Updated Successfully")
}