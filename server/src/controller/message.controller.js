import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/errorHandler.js";

export const sendMessage = asyncHandler(async (req, res, next) => {
  const { message } = req.body;
  const senderId = req.user;
  const receiverId = req.params.receiverId;

  if (!senderId || !message || !receiverId) {
    return next(new errorHandler("All fields are required", 400));
  }

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
      messages: [],
    });
  }

  const newMessage = await Message.create({
    sender: senderId,
    receiverId,
    content: message,
  });
  conversation.messages.push(newMessage._id);
  await conversation.save();

  res.status(200).json({
    success: true,
    message: "Message sent successfully",
    details: newMessage,
  });
});

export const getMessages = asyncHandler(async (req, res, next) => {
  const myId = req.user;
  const otherPartyId = req.params.otherPartyId;

  if (!myId || !otherPartyId) {
    return next(new errorHandler("All fields are required", 400));
  }

  let conversation = await Conversation.findOne({
    participants: { $all: [myId, otherPartyId] },
  }).populate("messages");

  res.status(200).json({
    success: true,
    message: "Messages fetched successfully",
    details: conversation,
  });
});
