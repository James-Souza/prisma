import { IFindWalletRequestDTO } from "./findWalletRequestDTO";
import { IWalletRepository } from "../../repositories/IWalletRepository";
import { Wallet } from "../../entities/Wallet";

export class FindWalletUseCases {
    constructor(
        private walletRepository: IWalletRepository
    ) { }

    async execute(data: IFindWalletRequestDTO): Promise<Wallet> {
        const wallet = await this.walletRepository.findByName(data.email)
        if (wallet) {
            return wallet
        }
        
        throw new Error(`Wallet cannot be found.`)
    }
}