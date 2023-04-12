const express = require("express");
const { controllerGetBlogs, controllerGetABlog, controllerDeleteABlog, controllerSaveBlog, controllerUpdateABlog } = require("./Blogs.controller");
const createUpload = require("../../lib/multer");
const admin = require("../../middlewares/admin.middleware");

const blogsUpload = createUpload("blogs");

const blogsRouter = express.Router();
blogsRouter.get("/blogs", controllerGetBlogs);
blogsRouter.post("/blogs", admin, blogsUpload.array("image"), controllerSaveBlog);
blogsRouter.get("/blog/:blogId", controllerGetABlog);
blogsRouter.delete("/blog/:blogId", admin, controllerDeleteABlog);
blogsRouter.put("/blog/:blogId", admin, blogsUpload.array("image"), controllerUpdateABlog);

module.exports = blogsRouter;
