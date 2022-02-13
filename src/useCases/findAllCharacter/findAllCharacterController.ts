import { Request, Response } from 'express'
import { FindAllCharacterUseCases } from './findAllCharacterUseCases'

export class FindAllCharacterController {
    constructor(
        private findAllCharacteruseCases: FindAllCharacterUseCases
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const character = await this.findAllCharacteruseCases.execute()
            return response.status(201).json({ character })
        } catch (err) {
            return response.status(400).json({ 
                message: err.message || 'Unexpected error.'
            })
        }
    }
}