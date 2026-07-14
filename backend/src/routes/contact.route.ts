import express from 'express'
import ContactHandle from '../controllers/contact.controller.js'
const route = express.Router()

route.post('/contact',ContactHandle)
export default route 