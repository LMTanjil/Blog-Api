//CREATE BLOG
import {Blog} from "../models/blog.model.js";

export const createBlog = async (req, res) => {
    const {title, description, author} = req.body;
    try{
        const create_blog = await Blog.create({
            title,
            description,
            author
        });
        return res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data:create_blog
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

export const getBlogbyId = async (req, res) => {
    const {id} = req.params;
    try{
       const singleBlog = await Blog.findById(id);
       return res.status(200).json({
           success: true,
           message: "Blog found by id successfully",
           data:singleBlog
       });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

export const getAllBlogs = async (req, res) => {
    try{
        const allBlogs = await Blog.find()
        return res.status(200).json({
            success: true,
            message: "All blogs found successfully",
            data:allBlogs
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

