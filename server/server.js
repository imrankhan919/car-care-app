const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db_config");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    msg: "CAR CARE API RUNNING...",
  });
});

// Auth Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Error Handler
app.use(errorHandler);

app.listen(PORT, console.log(`SERVER IS RUNNING AT : ${PORT}`.bgBlue));
