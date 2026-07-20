import express from 'express'
import CreateContact from '../controllers/contact.controller.js'
const route = express.Router();

route.post('/',CreateContact);
export default route ;