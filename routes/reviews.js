import { Router } from "express";
import * as reviewsCtrl from "../controllers/reviews.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";
const router = Router();

/*---------- Public Routes ----------*/
router.get("/", reviewsCtrl.index);
// router.get('/:id', reviewsCtrl.show)
router.post("/", reviewsCtrl.create);

router.get("/", reviewsCtrl.indexComment);

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);
router.put("/:id", checkAuth, reviewsCtrl.update);
router.delete("/:id", checkAuth, reviewsCtrl.delete);

router.post("/:id/comments", reviewsCtrl.createComment);
router.get("/:id/comments", reviewsCtrl.indexComment);
router.delete("/:id", checkAuth, reviewsCtrl.deleteComment);

export { router };
