import express from "express";
import posts from "./routes/posts.js";
import path from "path";

const port = process.env.PORT || 8000;
const app = express();

app.use("/api/posts", posts);

app.listen(port, () => 
    {
      console.log(`Server is running on port ${port}`);
    });
    