import express from "express";
const port = 5000;
const app = express();
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
