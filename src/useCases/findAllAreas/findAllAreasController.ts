import { Request, Response } from "express";
import { FindaAllAreasUseCases } from "./findAllAreasUseCases"

export class FindAllAreasController {
    constructor( 
        private findAllAreasUseCases: FindaAllAreasUseCases
    ) {}

    async handle(request: Request, response: Response):Promise<Response> {
        try {
            const areas = await this.findAllAreasUseCases.execute()
            return response.status(201).json(areas)
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}