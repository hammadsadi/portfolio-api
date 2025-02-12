import { Message } from './message.model';
import { TMessage } from './message.type';

// Save Message To DB
const saveMessageToDB = async (payload: TMessage) => {
  const result = await Message.create(payload);
  return result;
};

// Get Message From DB
const getAllMessageFromDB = async () => {
  const result = await Message.find();
  return result;
};

// Get Single Message From DB
const getSingleMessageFromDB = async (id: string) => {
  const result = await Message.findById(id);
  return result;
};

// Delete Single Message From DB
const deleteSingleMessageFromDB = async (id: string) => {
  const result = await Message.findByIdAndDelete(id);
  return result;
};

export const MessageServices = {
  saveMessageToDB,
  getAllMessageFromDB,
  deleteSingleMessageFromDB,
  getSingleMessageFromDB,
};
