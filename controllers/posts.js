const Post = require('../models/posts');

exports.createPost = (req,res)=>{
    const {title,description} = req.body;
    Post.create({
        title : title,
        description : description,
    }).then(()=>{
      res.redirect("/");
    }).catch((err)=> {
        console.log(err);
    })
}
exports.renderCreatePage = (req,res)=>{
    res.render("addPost");
}
exports.renderHomePage = (req,res)=>{
    Post.findAll({ order: [["createdAt", "desc"]] }).then((posts)=>{
        res.render("home", { postsArr: posts });
    }).catch(err=> console.log(err))
}
exports.renderEditPage = (req,res)=>{
    const postId = req.params.postId;
  Post.findByPk(postId)
    .then((post) => {
      res.render("editPost", {  post });
    })
    .catch((err) => console.log(err));
}
exports.updatePost = (req, res) => {
    const { title, description, postId } = req.body;
    Post.findByPk(postId)
      .then((post) => {
        (post.title = title),
          (post.description = description);
        return post.save();
      })
      .then((result) => {
        console.log(`Post id => ${postId} is updated successfully.`);
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  exports.deletePost = (req, res) => {
    const postId = req.params.postId;
    Post.findByPk(postId)
      .then((post) => {
        if (!post) {
          res.redirect("/");
        }
        return post.destroy();
      })
      .then((result) => {
        console.log("Post Deleted!!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  };