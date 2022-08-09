import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoryController } from "./ListCategoryController";

const categoryRepository = new CategoryRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase
);

export { listCategoriesController };
