import express from "express";
import {createBlog, createBlogs, getAllBlogs, getBlogbyId} from "../controllers/blog.controller.js";
import {blogMiddleware} from "../middleware/blog.middleware.js";

const router = express.Router();

router.post('/', blogMiddleware, createBlog);
router.post('/many', blogMiddleware, createBlogs);
router.get('/', blogMiddleware, getAllBlogs);
router.get('/:id',blogMiddleware, getBlogbyId);

export default router;