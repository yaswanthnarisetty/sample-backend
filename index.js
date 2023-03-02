// import { Register } from "./controllers/register";
import express from "express";
const router = express.Router()
const app = express();

app.get("/", (req, res) => {
  console.log("hiiiiiiiiiiii");
  res.send("hello");
});


const port = 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
