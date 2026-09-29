import { Request, Response } from "express";
import { Recipe } from "../models/recipe.model.js";

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.create(req.body);

    res.status(201).json(recipe);
  } catch (error) {
    console.error("Error creating recipe:", error);

    res.status(500).json({
      message: "Failed to create recipe",
    });
  }
};
