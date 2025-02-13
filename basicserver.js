// script should be like this - "scripts": {
  //   "start": "node file-name",
  //   "dev": "node --watch file-name"

  // },

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();
// setup static folder -
 //app.use(express.static(path.join(__dirname,'public')));
 // In browser type http://localhost:8000/index.html
 // In browser type http://localhost:8000/about.html
// app.get('/', (req, res) => { 
// //   res.send('Hello World!');
//sendFile method -
//    res.sendFile(path.join(__dirname,'public','index.html'));
// });
// app.get('/about', (req, res) => {
//     // res.send('About Us');
//     res.sendFile(path.join(__dirname,'public','about.html'));
// })
//working with JSON data - 
let posts = [
    {id: 1, body: 'This is post one'},
    {id: 2, body: 'This is post two'},
    {id: 3, body: 'This is post three'}
];
// get all post
app.get('/api/posts', (req, res) => {
  // query string,limit & status code
  let limit = parseInt(req.query.limit);
  if(!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {      
    res.status(200).json(posts);
  }
  console.log(req.query)
})
// get single post
app.get('/api/posts/:id',(req, res)=> {
  //console.log(req.params.id)
  const id = parseInt(req.params.id);
  // const post = posts.filter(p => p.id === id);
  // res.json(post);
  const post = posts.find(p => p.id === id);
  if(post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({message: 'Post not found'});
  }
})
app.listen(port, () => 
{
  console.log(`Server is running on port ${port}`);
});