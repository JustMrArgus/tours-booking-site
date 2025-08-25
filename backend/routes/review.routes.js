const express = require("express");
const reviewController = require("../controllers/review.controller");
const setTourUserIds = require("../middleware/setTourUserIds");
const restrictTo = require("../middleware/restricTo");
const protect = require("../middleware/protect");

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(restrictTo("user"), setTourUserIds, reviewController.createReview);

router
  .route("/:id")
  .get(reviewController.getReview)
  .patch(restrictTo("user", "admin"), reviewController.updateReview)
  .delete(restrictTo("user", "admin"), reviewController.deleteReview);

module.exports = router;
