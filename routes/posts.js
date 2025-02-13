// const express = require("express");
// const router = express.Router();

// using ES6 module
// before using ES6 module,need to add "type": "module" in package.json file. 
import express from "express";
const router = express.Router();

let posts = [
    {id: 1, body: 'This is post one'},
    {id: 2, body: 'This is post two'},
    {id: 3, body: 'This is post three'}
];
// get all post
router.get('/', (req, res) => {
  // query string,limit & status code
  let limit = parseInt(req.query.limit);
  if(!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }     
    res.status(200).json(posts);
  console.log(req.query)
})
// get single post
router.get('/:id',(req, res)=> {
  //console.log(req.params.id)
  const id = parseInt(req.params.id);
  // const post = posts.filter(p => p.id === id);
  // res.json(post);
  const post = posts.find(p => p.id === id);
  if(!post) {
    res.status(404).json({message: 'Post not found'});
  }
    res.status(200).json(post);
 })

// Create new post 
router.post('/', (req, res) => {
   console.log(req.body);

  const newPost = {
    id: posts.length + 1,
    body: req.body.body
  }
  if(!newPost.body) {
    return res.status(400).json({message: 'Please include a body'});
  }
  posts.push(newPost);
   res.status(201).json(posts);
})

// update post 
router.put("/:id", (req, res) => { 
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if(!post) {
    return res.status(404).json({message: 'Post not found'});
  }
  post.body = req.body.body;
  res.status(200).json(posts);
})

// delete post 
router.delete("/:id", (req, res) => { 
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if(!post) {
    return res.status(404).json({message: 'Post not found'});
  }
  posts = posts.filter(p => p.id !== id);
  res.status(200).json(posts);
})
// module.exports = router;

// using ES6 module
// before using ES6 module,need to add "type": "module" in package.json
export default router;