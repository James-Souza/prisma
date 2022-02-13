import { Wallet } from "../../entities/Wallet";
import { IWalletRepository } from "../../repositories/IWalletRepository"

export class FindAllWalletsUseCases {
    constructor(
        private iWalletRepository: IWalletRepository
    ) { }

    async execute(): Promise<Array<Wallet>> {
        const wallets: Array<Wallet> = await this.iWalletRepository.findAll()
        if (wallets) {
            return wallets
        }

        throw new Error('Wallets cannot be found.')
    }
}