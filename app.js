const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const indexRouter = require('./modules/index.route');

app.use('/api/v1/users', indexRouter.userRouter);
app.use('/api/v1/blogs', indexRouter.blogRouter);

app.use('*', (req, res) => {
    res.json({ message: "page not found" });
})

app.listen(port,()=>console.log(`example app listining to port ${port}`))