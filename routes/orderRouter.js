// external imports
const express = require("express");

// internal imports
const {
  addToOrder,
  updateOrder,
  removeOrder,
  userOrder,
  getAllOrders,
} = require("../controllers/orderController");
const { verifyToken, verifyAdmin } = require("../middlewares/auth/authHandler");

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route("/").post(verifyToken, addToOrder).get(getAllOrders);
// .get(verifyToken, verifyAdmin, getAllOrders);

router
  .route("/:id")
  .put(verifyToken, updateOrder)
  .delete(verifyToken, removeOrder);

router.route("/user/:userId").get(verifyToken, userOrder);

// exporting module
module.exports = router;
