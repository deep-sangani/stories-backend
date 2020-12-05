const Post = require("../models/Post")

const postController = ()=>{
 return {
     getposts:async(req,res)=>{

        try {
           const post = await Post.find()
            res.status(200).json(post)
        } catch (error) {
            res.status(404).json({error:"something went wrong!!!"})
        }
     },
     createposts:(req,res)=>{
         const post = req.body
        try {
            const newpost = new Post(post)
            newpost.save();
           return res.status(200).json({msg:"post created successfully"})
         } catch (error) {
             res.status(500).json({error:"post is not created  or something went wrong!!!"})
         }
     },
     updatepost:(req,res)=>{
         const {id:_id} = req.params
         const post = req.body
        Post.findByIdAndUpdate(_id,post,{new:true}).then((post)=>res.status(200).json({msg:"post updated successfully"})).catch((err)=>res.status(404).json({msg:"post is not found !!!!"}))
     },
     deletepost:(req,res)=>{
         const{id:_id} = req.params
         Post.findByIdAndDelete(_id).then((post)=>res.status(200).json({msg:"post delete successfully"})).catch((err)=>res.status(404).json({msg:"post is not found !!!!"}))
     },
     likecount:(req,res)=>{
         const {id:_id} = req.params
         Post.updateOne({_id}, { $inc: {'likeCount': 1 } }, {new: true }).then((post)=>res.status(200).json({msg:"post liked successfully"})).catch((err)=>res.status(404).json({msg:"post is not found !!!!"}))
     }
 }
}

module.exports = postController