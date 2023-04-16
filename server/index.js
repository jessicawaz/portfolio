import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

import getSports from "./sportsList.js";
app.use("/listSports", getSports);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

export default app;
