// foodRoute.js
import express from 'express';
import { addFood } from '../controllers/foodController.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const foodRouter = express.Router();

// Create upload folder if it doesn't exist
const uploadPath = 'uploads';
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

// Image Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath); 
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
