const express = require("express");
const path = require('path');

const router = express.Router();
const postController = require("../controllers/posts");

router.get("/",postController.renderHomePage);
router.get("/create",postController.renderCreatePage);
router.get("/edit/:postId",postController.renderEditPage);

router.post("/create-post",postController.createPost);
router.post("/update-post",postController.updatePost);
router.post("/delete/:postId",postController.deletePost);

module.exports = router;