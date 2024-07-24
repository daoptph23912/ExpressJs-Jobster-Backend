const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');

const rateLimiter = require('express-rate-limit');


//Phần mã này đề cập để sử dụng tool rateLimiter dể giới hạn số lượng gửi từ 1 IP đến API cụ cụ thể nhất định

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,    
  message: {
    msg: 'Too many requests from this IP, please try again after 15 minutes',
  },
});

const {
  register,
  login,
  updateUser,
  testingRegister,
} = require('../controllers/auth');
router.post('/testingRegister', testingRegister);
router.post('/register', apiLimiter, register);
router.post('/login', apiLimiter, login);
router.patch('/updateUser', authenticateUser, testUser, updateUser);

module.exports = router;
