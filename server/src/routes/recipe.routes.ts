import { Router } from "express";
import { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } from "../controllers/recipe.controller.js";

const router = Router();

router.post("/", createRecipe);
router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.patch("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
