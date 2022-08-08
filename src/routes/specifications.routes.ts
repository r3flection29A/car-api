import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationServer } from "../modules/cars/services/CreateSpecificationServer";

const specificationRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const specificationService = new CreateSpecificationServer(specificationRepository);

    specificationService.execute({ name, description });

    return res.status(201).send()
});

export { specificationRoutes };
