import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import mainRoute from "./routes/main.js";

const app = express();

app.use(bodyParser.json({ limit: "5mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());

app.use("/", mainRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} !`));