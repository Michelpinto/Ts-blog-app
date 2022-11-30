import express from 'express';
const router = express.Router();
const {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogControllers');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getBlogs).post(protect, setBlog);
router.route('/:id').put(protect, updateBlog).delete(protect, deleteBlog);

module.exports = router;
