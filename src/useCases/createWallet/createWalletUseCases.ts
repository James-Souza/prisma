import { Wallet } from "../../entities/Wallet"
import { IWalletRepository } from "../../repositories/IWalletRepository"
import { ICreateWalletRequestDTO } from "./createWalletRequestDTO"

export class CreateWalletUseCases {
    constructor(
        private walletRepository: IWalletRepository
    ) { }

    async execute(data: ICreateWalletRequestDTO) {
        const walletAlreadyExists = await this.walletRepository.findByName(data.email)

        if (walletAlreadyExists) {
            throw new Error('Wallet already exists.')
        }

        const wallet = new Wallet(data, data.email)
        await this.walletRepository.save(wallet)
    }
}