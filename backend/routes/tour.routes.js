const express = require("express");
const tourController = require("../controllers/tour.controller");
const reviewRouter = require("./review.routes");
const aliasTopTours = require("../middleware/aliasTopTours");
const restrictTo = require("../middleware/restricTo");
const protect = require("../middleware/protect");
const tourImagesHandler = require("../middleware/tourImagesHandler");

const router = express.Router();

router.use("/:tourId/reviews", reviewRouter);

router.route("/top-5-cheap").get(aliasTopTours, tourController.getAllTours);

router.route("/tour-stats").get(tourController.getTourStats);
router
  .route("/monthly-plan/:year")
  .get(protect, restrictTo("admin"), tourController.getMonthlyPlan);

router
  .route("/tours-within/:distance/center/:latlng/unit/:unit")
  .get(tourController.getToursWithin);

router.route("/distances/:latlng/unit/:unit").get(tourController.getDistances);

router
  .route("/")
  .get(tourController.getAllTours)
  .post(protect, restrictTo("admin", "lead-guide"), tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(
    protect,
    restrictTo("admin", "lead-guide"),
    tourImagesHandler.uploadTourImages,
    tourImagesHandler.resizeTourImages,
    tourController.updateTour
  )
  .delete(
    protect,
    restrictTo("admin", "lead-guide"),
    tourController.deleteTour
  );

module.exports = router;
