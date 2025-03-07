const express = require("express");
const {
  getAllUsers,
  getAllCars,
  getUserCar,
} = require("../controllers/adminController");
const adminProtect = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/users", adminProtect, getAllUsers);

router.get("/complaints", adminProtect, getAllCars);
router.get("/complaints/:id", adminProtect, getUserCar);

module.exports = router;
