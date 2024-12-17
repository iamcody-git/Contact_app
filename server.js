import express from "express";
import dotenv from "dotenv";
import router from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import connectDb from "./Db/conn.js";
import loginRouter from './routes/userRoutes.js'


dotenv.config();

connectDb();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(errorHandler);

app.use("/api/contact", router);
app.use("/api/users", loginRouter);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
