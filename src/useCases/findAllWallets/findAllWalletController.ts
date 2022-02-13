import { Request, Response } from 'express'
import { FindAllWalletsUseCases } from './findAllWalletsUseCases'

export class FindAllWalletController {
    constructor(
        private findAllWalletsUseCases: FindAllWalletsUseCases
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const wallets = await this.findAllWalletsUseCases.execute()
            return response.status(201).json({ wallets })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}