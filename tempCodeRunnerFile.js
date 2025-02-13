app.use("/api/posts", posts);

app.listen(port, () => 
    {
      console.log(`Server is running on port ${port}`);
    });
    