const postController = require("../controllers/posts")

function posts(app){
    app.get('/posts',postController().getposts)
    app.post('/posts',postController().createposts)
    app.patch('/posts/:id',postController().updatepost)
    app.delete('/posts/:id',postController().deletepost)
    app.patch('/posts/likecount/:id',postController().likecount)

}

module.exports = posts