const express = require('express');
const router = express.Router();
const Post = require('../modules/Post');

let nol = 0;

//GET BACK ALL THE POSTS
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
});

//POST NEW POST FROM INSIDE
router.post('/', (req,res)=>{
   const post = new Post({
       id: nol++,
       title: req.body.title,
       body: req.body.body
   });
   post.save()
       .then(data=>{
           res.json(data);
       })
       .catch(err=>{
           res.json({message: err})
       })
});

//SPECIFIC POST
router.get('/:postId', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch (err){
        res.json({message: err})
    }
});

//DELETE POST
router.delete('/:postId', async (req,res)=>{
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch (err){
        res.json({message: err})
    }
});

//UPDATE POST
router.patch('/:postId', async (req,res)=>{
   try{
    const updatedPost = await Post.updateOne({_id: req.params.postId},
        {$set: {title: req.body.title}});
    res.json(updatedPost);
   }catch (err){
       res.json({message: err})
   }
});





module.exports = router;