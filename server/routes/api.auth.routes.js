const {
    userRegistrationController,
    userAuthorizationController,
    userLogoutController,
    userRefreshController
  } = require('../controllers/AuthRegUserController')
  
  const router = require('express').Router()
  const verifyRefreshToken = require('../middleware/verifyRefreshToken')
  
  
  module.exports = router
    .post('/registration', userRegistrationController)
    .post('/authorization', userAuthorizationController)
    .delete('/logout', userLogoutController)
    .get('/refresh', verifyRefreshToken, userRefreshController)