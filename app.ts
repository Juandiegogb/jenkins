import express, { Request, Response, Router } from "express";

const app = express();

const router = Router();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server on port http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hey from nodeJs");
});
