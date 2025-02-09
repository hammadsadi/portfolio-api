import { model, Schema } from 'mongoose';
import { TProject } from './project.type';
const blogSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    projectFeatures: {
      type: String,
      required: true,
    },
    technologies: {
      type: String,
      required: true,
    },
    fronEndGithub: {
      type: String,
    },
    backendEndGithub: {
      type: String,
    },
    projectLiveLink: {
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

export const Project = model<TProject>('Project', blogSchema);
