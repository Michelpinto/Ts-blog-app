import express from 'express';
const router = express.Router();
const {
  registerUser,
  getMe,
  loginUser,
} = require('../controllers/userController');

// register user
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', getMe);

module.exports = router;
