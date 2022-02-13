import { Request, Response } from 'express'
import { FindCharacterUseCases } from './findCharacterUseCases'

export class FindCharacterController {
    constructor(
        private findCharacteruseCases: FindCharacterUseCases
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const character = await this.findCharacteruseCases.execute(request.body)
            return response.status(201).json({ character })
        } catch (err) {
            return response.status(400).json({ 
                message: err.message || 'Unexpected error.'
            })
        }
    }
}