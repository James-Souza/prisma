import { Wallet } from "../entities/Wallet";

export interface IWalletRepository {
    save(wallet: Wallet):Promise<void>
    findByName(email: string):Promise<Wallet>
    findAll(): Promise<Wallet[]>
}