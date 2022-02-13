import { Request, Response } from "express";
import { CreateCharacterUseCases } from "./createCharacterUseCases";

export class CreateCharacterController {
    constructor(
        private createCharacterUseCases: CreateCharacterUseCases
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const character = request.body
            await this.createCharacterUseCases.execute(character)
            return response.status(201).json({
                message: 'User created successfully.'
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}