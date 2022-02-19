import { Request, Response } from 'express'
import { Wallet } from '../../entities/Wallet'
import { CreateWalletUseCases } from './createWalletUseCases'

export class CreateWalletController {
    constructor(
        private createWalletUseCases: CreateWalletUseCases
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { email } = request.body
            const wallet = new Wallet(request.body, email)
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