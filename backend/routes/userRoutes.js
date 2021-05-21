const express = require('express')
const router = express.Router()
const { authUser, getUserProfile, registerUser, updateUserProfile } = require('../controllers/userControllers')
const protect= require('../middleWare/authMiddleWare')

router.post('/', registerUser)

router.post('/login', authUser)

router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

module.exports = router
 
