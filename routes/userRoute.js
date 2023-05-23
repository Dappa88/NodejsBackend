
const express = require("express")
const usersCtrl = require("../controllers/userCtrl")

const router = express.Router()


router.get("/sample/:id", usersCtrl.getOneUser)

router.get("/allusers", usersCtrl.getAllUsers)

router.post("/register", usersCtrl.register)

router.post("/login", usersCtrl.login)


 
module.exports = router