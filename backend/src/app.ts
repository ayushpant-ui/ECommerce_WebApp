import express from "express";
import userRoutes from './routes/user.route.js'
import ContactRoutes from './routes/contact.route.js'
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contacts',ContactRoutes);
app.use('/api/auth',userRoutes);

export default app ;