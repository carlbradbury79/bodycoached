const express = require('express');
const router = express.Router();
const authUser = require('../controllers/userController').authUser;
const getUserProfile = require('../controllers/userController').getUserProfile;

// @Route POST api/users/login
// @Desc User sends username and password
// @Access public
router.post('/login', authUser);

// @Route GET api/users/profile
// @Desc Return users profile
// @Access private
// router.route('/profile').get(protect, getUserProfile);
router.route('/profile').get(getUserProfile);

module.exports = router;
