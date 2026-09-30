import { Request, Response } from "express";
import mongoose from "mongoose";
import { Recipe } from "../models/recipe.model.js";

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);

    res.status(500).json({
      message: "Failed to fetch recipes",
    });
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid recipe id",
      });
    }

    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error);

    res.status(500).json({
      message: "Failed to fetch recipe",
    });
  }
};

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

export const updateRecipe = async (req: Request, res: Response) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid recipe id",
      });
    }

    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json(recipe);
  } catch (error) {
    console.error("Error updating recipe:", error);

    res.status(500).json({
      message: "Failed to update recipe",
    });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid recipe id",
      });
    }

    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting recipe:", error);

    res.status(500).json({
      message: "Failed to delete recipe",
    });
  }
};
