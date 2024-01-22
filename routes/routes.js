import express from 'express'
import { uploadImage } from '../controller/image-controller.js';
import { downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router=express.Router();

// we write file in the upload.single because we had given name of data which we are uploading a "file"
router.post('/upload',upload.single('file'),uploadImage)
router.get('/file/:fileId',downloadImage);


export default router;