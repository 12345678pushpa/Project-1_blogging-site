const express = require('express');
const router = express.Router();
const AuthorController = require("../controller/authorController")
const BlogController = require('../controller/blogController')
const mid= require('../middleware/midfile')


router.post('/author', AuthorController.author)
router.post('/blog',mid.authentication, BlogController.blog)
router.get('/getblog', mid.authentication, BlogController.getblog)
router.put('/updateblog/:blogId',mid.authentication, mid.authorization, BlogController.updateblog)
router.delete('/deleteblog/:blogId',mid.authentication, mid.authorization, BlogController.deleteblog)
router.delete('/deletebyquery',mid.authentication, mid.authorization, BlogController.deletebyquery)
router.post('/login', AuthorController.login)



// router.get('/filterblog', BlogController.filterblog)



module.exports = router;