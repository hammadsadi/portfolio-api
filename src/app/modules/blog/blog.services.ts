import { Blog } from "./blog.mode";
import { TBlog } from "./blog.types";

// Save Blog To DB
const saveBlogToDB = async (payload: TBlog) => {
  const result = await Blog.create(payload)
  return result
};

// Update Single Blog 
const updateBlogAndSaveToDB = async (payload: TBlog, id:string) => {
  const result = await Blog.findByIdAndUpdate(id,payload, {new:true})
  return result
};

// Get Blog From DB
const getAllBlogFromDB = async () => {
  const result = await Blog.find()
  return result
};

// Get Single Blog From DB
const getSingleBlogFromDB = async (id:string) => {
  const result = await Blog.findById(id)
  return result
};

// Delete Single Blog From DB
const deleteSingleBlogFromDB = async (id:string) => {
  const result = await Blog.findByIdAndDelete(id)
  return result
};

export const BlogServices = {
  saveBlogToDB,
  getAllBlogFromDB,
  getSingleBlogFromDB,
  deleteSingleBlogFromDB,
  updateBlogAndSaveToDB,
};