import { Router } from "express";
import { CategoryRepositories } from "../modules/cars/repositories/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepositories();


categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoryRepository.list();

  return res.json(all);
});

export { categoriesRoutes };


