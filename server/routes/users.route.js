const {Router} = require('express');
const router = Router()
const {getUsers,createUsers} = require('../controllers/users.controllers')



router.get("/users",getUsers)
router.post("/user",createUsers)