import express from 'express';
const router = express.Router();
const {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogControllers');

router.route('/').get(getBlogs).post(setBlog);
router.route('/:id').put(updateBlog).delete(deleteBlog);

module.exports = router;
