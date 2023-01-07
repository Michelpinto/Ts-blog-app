import express from 'express';
const router = express.Router();
const {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
  getBlog,
} = require('../controllers/blogControllers');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getBlogs).post(protect, setBlog);
router
  .route('/:id')
  .put(protect, updateBlog)
  .delete(protect, deleteBlog)
  .get(protect, getBlog);

module.exports = router;
