const express = require("express");
const bookingController = require("./../controllers/booking.controller");
const restrictTo = require("../middleware/restricTo");
const protect = require("../middleware/protect");

const router = express.Router();

router.use(protect);

router.get("/checkout-session/:tourId", bookingController.getCheckoutSession);

router.use(restrictTo("admin"));

router
  .route("/")
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
