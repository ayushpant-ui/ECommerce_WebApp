import express from "express";
import userRoutes from './routes/user.route.js'
import ContactRoutes from './routes/contact.route.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contacts',ContactRoutes);
app.use('/api/users',userRoutes);

export default app ;