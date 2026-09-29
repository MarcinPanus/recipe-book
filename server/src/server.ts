import "dotenv/config";
import express from "express";
import { connectDatabase } from "./db/database.js";
import recipeRoutes from "./routes/recipe.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Recipe Book API",
  });
});

app.use("/api/recipes", recipeRoutes);

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
