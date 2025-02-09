/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TBlog } from './blog.types';
const blogSchema = new Schema<TBlog>(
  {
    userName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);




export const Blog = model<TBlog>('Blog', blogSchema);
