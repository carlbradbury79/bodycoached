const express = require('express');
const router = express.Router();
const authUser = require('../controllers/userController').authUser;
const getUserProfile = require('../controllers/userController').getUserProfile;
const registerUser = require('../controllers/userController').registerUser;
const protect = require('../middlware/authMiddleware');

// @Route POST api/users/login
// @Desc User sends username and password
// @Access public
router.post('/login', authUser);

// @Route POST api/users
// @Desc User sends name, email and password
// @Access Public
router.route('/').post(registerUser);

// @Route GET api/users/profile
// @Desc Return users profile
// @Access private
// router.route('/profile').get(protect, getUserProfile);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
