import express  from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient  } from "@prisma/client";
import Auth_router from './routes/auth.routes.js';
import CVrouter from './routes/cv.routes.js';
dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 3000;

// const prismaClient = new PrismaClient()
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/api/auth', Auth_router)
app.use('/api/cv', CVrouter);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
