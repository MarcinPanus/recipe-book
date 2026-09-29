import { Router } from "express";
import { createRecipe } from "../controllers/recipe.controller.js";

const router = Router();

router.post("/", createRecipe);

export default router;
