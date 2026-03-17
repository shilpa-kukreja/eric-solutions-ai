import express from 'express';
const router = express.Router();
import {createContact,getContacts,deleteContact} from '../controllers/contactcontroller.js';

router.post('/create',createContact);
router.get('/get',getContacts);
router.delete('/delete/:id',deleteContact);

export default router;
