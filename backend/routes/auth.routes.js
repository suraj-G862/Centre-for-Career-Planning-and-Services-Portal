import express from 'express';
import { signup, login, logout, verifyEmail, sendCodeAgain, forgotPassword, resetPassword  } from '../controllers/auth.controller.js';
const router = express.Router();


router.post('/signup',signup);
router.post('/verify-email', verifyEmail);
router.post('/send-code-again', sendCodeAgain);
router.post('/login',login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/logout', logout);

export default router;