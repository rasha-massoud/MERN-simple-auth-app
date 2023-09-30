import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();

import userRoutes from "./routes/userRoutes.js";
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));