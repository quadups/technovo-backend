import express from "express";
const router = express.Router();
import {handleContactFormSubmission } from "../controllers/contactController.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// POST /api/contact route
router.post("/", handleContactFormSubmission);

export default router;
