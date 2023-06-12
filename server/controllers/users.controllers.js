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
   res.send('User Added Successfully')
}