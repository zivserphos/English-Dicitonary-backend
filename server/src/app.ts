import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import morganHandler from "./middlewares/morgan";
import errorHandler from "./middlewares/errorHandlers";
import DictionaryRouter from "./routes/dictionaryRouter";
import unknownEndPoint from "./controllers/unknownEndpoint";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.text());
app.use(express.static(path.resolve("../client/build")));
app.use(
  morganHandler,
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use("/api", DictionaryRouter);

app.use(errorHandler);
app.use(unknownEndPoint);

export default app;
