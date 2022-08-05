import { CategoryRepositories } from "../repositories/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryServer {
    constructor(private categoryRepository: CategoryRepositories) { }

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExist = this.categoryRepository.findByName(name);

        if (categoryAlreadyExist) {
            throw new Error("Category already exists!");
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryServer };