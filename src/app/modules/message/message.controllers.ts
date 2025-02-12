import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MessageServices } from './message.services';

/**
 * @Desc Create Message
 * @returns Response with Data
 * @method POST
 */
const messageCreate = catchAsync(async (req, res) => {
  const result = await MessageServices.saveMessageToDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'Message Created Successful',
    data: result,
  });
});

/**
 * @Desc Get All Message
 * @returns Response with Data
 * @method GET
 */
const getAllMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.getAllMessageFromDB();
  sendResponse(res, {
    success: true,
    message: 'Message Retrieved Successful',
    data: result,
  });
});

/**
 * @Desc Delete Single Message
 * @returns Response with Data
 * @param messageId
 * @method DELETE
 */
const deleteSinglMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.deleteSingleMessageFromDB(
    req.params.messageId,
  );
  sendResponse(res, {
    success: true,
    message: 'Single Message Deleted Successful',
    data: result,
  });
});

/**
 * @Desc Get Single Message
 * @returns Response with Data
 * @param messageId
 * @method GET
 */
const getSinglMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.getSingleMessageFromDB(
    req.params.messageId,
  );
  sendResponse(res, {
    success: true,
    message: 'Single Message Get Successful',
    data: result,
  });
});

export const MessageControllers = {
  messageCreate,
  deleteSinglMessage,
  getAllMessage,
  getSinglMessage,
};
