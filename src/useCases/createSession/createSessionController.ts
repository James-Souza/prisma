import { Request, Response } from "express";
import { Session } from "../../entities/Session";
import { CreateSessionUseCases } from "./createSessionUseCases";

export class CreateSessionController {
    constructor(
        private createSessionUseCases: CreateSessionUseCases
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.body
            const session = new Session(request.body, id)
            await this.createSessionUseCases.execute(session)
            return response.status(201).json({
                message: 'Session created successfully.'
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}