import express from 'express'
// import { getProfile, login, logout, register } from '../controller/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { getMessages, sendMessage } from '../controller/message.controller.js';


const router = express.Router();
router.post('/send/:receiverId', protect, sendMessage);
router.get('/get-messages/:otherPartyId', protect, getMessages);

export default router