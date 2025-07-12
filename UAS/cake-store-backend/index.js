import express from 'express';
import authRoutes from './routes/authRoutes.js';
import cakeRoutes from './routes/cakeRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/cakes', cakeRoutes);

app.get("/", (req, res) => {
  res.send("Backend NeyraCake API is running on Vercel!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
