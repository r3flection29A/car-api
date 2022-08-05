import { Router } from "express";
import { CategoryRepositories } from "../repositories/CategoryRepository";
import { CreateCategoryServer } from "../services/CreateCategoryServer";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepositories();


categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryServer = new CreateCategoryServer(categoryRepository);

  createCategoryServer.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoryRepository.list();

  return res.json(all);
});

export { categoriesRoutes };


