import express from "express";
import postController from "../controllers/postController.js";

const router = express.Router();

router.get("/", postController.getAll);
router.get("/create", postController.getCreate);
router.post("/create", postController.create);
router.get("/edit/:id", postController.getEdit);
router.post("/edit/:id", postController.update);
router.post("/delete/:id", postController.delete);

export default router;