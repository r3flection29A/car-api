import { Router } from "express";
import { CategoryRepositories } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepositories();


categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExist = categoryRepository.findByName(name);

  if (categoryAlreadyExist) {
    return res.status(400).json({ message: "Category already exists!" });
  }

  categoryRepository.create({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoryRepository.list();

  return res.json(all);
});

export { categoriesRoutes };


