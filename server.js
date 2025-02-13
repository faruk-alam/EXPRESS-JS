// const express = require("express");
// const posts = require("./routes/posts.js");
// const path = require("path")

// using ES6 module
// before using ES6 module,need to add "type": "module" in package.json 
import express from "express";
import posts from "./routes/posts.js";
import path from "path";

const port = process.env.PORT || 8000;
const app = express();

// body parser middleware
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/posts", posts);

app.listen(port, () => 
    {
      console.log(`Server is running on port ${port}`);
    });
    