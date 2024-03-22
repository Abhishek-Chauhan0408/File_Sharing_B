import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import DBconnection from "./database/db.js";
import router from "./routes/routes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use("/", router);

const PORT = process.env.PORT || 8000;

DBconnection();

app.get("/", (req, res) => {
  res.send("file server working!!");
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
