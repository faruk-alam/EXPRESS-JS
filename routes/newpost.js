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