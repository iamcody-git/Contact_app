import express from 'express'
import {getContact, getContactWithId,postContact,updateContact,deleteContact}  from '../controllers/contactController.js'
import { validateToken } from '../middleware/validateToken.js';

const router = express.Router();

router.use(validateToken);
router.route("/").get(getContact).post(postContact);

router.route("/:id").get(getContactWithId).put(updateContact).delete(deleteContact)

export default router;
