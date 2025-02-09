import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.services";

/**
 * @Desc Create Blog
 * @returns Response with Data
 * @method POST
 */
const blogCreate = catchAsync(async (req, res) => {
  const result = await BlogServices.saveBlogToDB(req.body)
  sendResponse(res, {
    success: true,
    message: 'Blog Created Successful',
    data: result,
  });
});

/**
 * @Desc Get All Blog
 * @returns Response with Data
 * @method GET
 */
const getAllBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogFromDB()
  sendResponse(res, {
    success: true,
    message: 'Blog Retrieved Successful',
    data: result,
  });
});


/**
 * @Desc Get Single Blog
 * @returns Response with Data
 * @param blogId
 * @method GET
 */
const getSingleBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getSingleBlogFromDB(req.params.blogId);
  sendResponse(res, {
    success: true,
    message: 'Single Blog Retrieved Successful',
    data: result,
  });
});


/**
 * @Desc Delete Single Blog
 * @returns Response with Data
 * @param blogId
 * @method DELETE
 */
const deleteSingleBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.deleteSingleBlogFromDB(req.params.blogId);
  sendResponse(res, {
    success: true,
    message: 'Single Blog Deleted Successful',
    data: result,
  });
});


/**
 * @Desc Update Single Blog
 * @returns Response with Data
 * @param blogId
 * @method PUT/PATCH
 */
const updateSingleBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.updateBlogAndSaveToDB(req.body ,req.params.blogId);
  sendResponse(res, {
    success: true,
    message: 'Single Blog Updated Successful',
    data: result,
  });
});
export const BlogControllers = {
  blogCreate,
  getAllBlog,
  getSingleBlog,
  deleteSingleBlog,
  updateSingleBlog,
};