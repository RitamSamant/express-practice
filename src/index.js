//const http = require("http");
const express = require("express");

const groceriesRoutes = require("./routes/groceries");
const marketRoutes = require("./routes/markets");

const app = express();
// const app = http.createServer((req, res) => {
//   console.log("request made");
// });

const PORT = 3000;

//middleware

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.use("/api/v1/groceries", groceriesRoutes);
app.use("/api/v2/markets", marketRoutes);

app.listen(PORT, () => {
  console.log(`running express server on Port ${PORT}`);
});

// GET REQUEST
