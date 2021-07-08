const {Router} = require('express');
const router = Router();

const blogsController = require('../../controllers/blogs-controller');

router.get('/', blogsController.serveBlogsIndex);
router.get('/:blogId', blogsController.serveSingleBlog);

module.exports = router;
