// script should be like this - "scripts": {
  //   "start": "node basicserver",
  //   "dev": "node --watch basicserver"

  // },

const express = require('express');
const path = require('path');

const app = express();
app.get('/', (req, res) => { 
//   res.send('Hello World!');
   res.sendFile(path.join(__dirname,'public','index.html'));
});
app.get('/about', (req, res) => {
    // res.send('About Us');
    res.sendFile(path.join(__dirname,'public','about.html'));
})
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});