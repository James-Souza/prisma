import { Request, Response } from 'express'
import { CreateWalletUseCases } from './createWalletUseCases'

export class CreateWalletController {
    constructor(
        private createWalletUseCases: CreateWalletUseCases
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const wallet = request.body
        try {
            await this.createWalletUseCases.execute(wallet)
            return response.status(201).json({
                message: 'Wallet created Successfully.'
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}