import { Request, Response } from 'express'
import { FindWalletUseCases } from "./findWalletUseCases";

export class FindWalletController {
    constructor(
        private findWalletUseCases: FindWalletUseCases
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = request.body
            const wallet = await this.findWalletUseCases.execute(data)
            return response.status(201).json(wallet)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}