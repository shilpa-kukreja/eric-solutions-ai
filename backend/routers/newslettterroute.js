import express from 'express';
const router = express.Router();
import {createNewsletter,getNewsletter,deleteNewsletter} from '../controllers/newslettercontroller.js';

router.post('/subscribe',createNewsletter);
router.get('/get',getNewsletter);
router.delete('/delete/:id',deleteNewsletter);

export default router;