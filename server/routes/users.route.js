const {Router} = require('express');
const router = Router()
const {getUsers,createUsers,getUser,deleteUser,updateUser} = require('../controllers/users.controllers')



router.get("/users",getUsers)
router.post("/user",createUsers)
router.get("/user/:id",getUser)
router.delete("/user/:id",deleteUser)
router.put("/user/:id",updateUser)
module.exports =router