import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.services';

/**
 * @Desc Create Project
 * @returns Response with Data
 * @method POST
 */
const projectCreate = catchAsync(async (req, res) => {
  const result = await ProjectServices.saveProjectToDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'Project Created Successful',
    data: result,
  });
});

/**
 * @Desc Get All Project
 * @returns Response with Data
 * @method GET
 */
const getAllProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectFromDB();
  sendResponse(res, {
    success: true,
    message: 'Project Retrieved Successful',
    data: result,
  });
});

/**
 * @Desc Get Single Project
 * @returns Response with Data
 * @param projectId
 * @method GET
 */
const getSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getSingleProjectFromDB(
    req.params.projectId,
  );
  sendResponse(res, {
    success: true,
    message: 'Single Project Retrieved Successful',
    data: result,
  });
});

/**
 * @Desc Delete Single Project
 * @returns Response with Data
 * @param projectId
 * @method DELETE
 */
const deleteSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.deleteSingleProjectFromDB(
    req.params.projectId,
  );
  sendResponse(res, {
    success: true,
    message: 'Single Project Deleted Successful',
    data: result,
  });
});

/**
 * @Desc Update Single Project
 * @returns Response with Data
 * @param projectId
 * @method PUT/PATCH
 */
const updateSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.updateProjectAndSaveToDB(
    req.body,
    req.params.projectId,
  );
  sendResponse(res, {
    success: true,
    message: 'Single Project Updated Successful',
    data: result,
  });
});
export const ProjectControllers = {
  projectCreate,
  updateSingleProject,
  getAllProject,
  deleteSingleProject,
  getSingleProject,
};
