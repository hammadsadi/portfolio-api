import { Project } from './project.model';
import { TProject } from './project.type';

// Save Project To DB
const saveProjectToDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

// Update Single Project
const updateProjectAndSaveToDB = async (
  payload: Partial<TProject>,
  id: string,
) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// Get Project From DB
const getAllProjectFromDB = async () => {
  const result = await Project.find();
  return result;
};

// Get Single Blog From DB
const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

// Delete Single Project From DB
const deleteSingleProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const ProjectServices = {
  saveProjectToDB,
  updateProjectAndSaveToDB,
  getAllProjectFromDB,
  deleteSingleProjectFromDB,
  getSingleProjectFromDB,
};
