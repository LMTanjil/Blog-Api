import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {dbConnect} from "./config/db.js";
import blogRoute from "./routes/blog.route.js";

const app = express();
app.use(express.json());

dbConnect()
app.use("/api/v1/blogs", blogRoute)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})