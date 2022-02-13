import { PrismaClient } from "@prisma/client";
import { Wallet } from "../../entities/Wallet";
import { IWalletRepository } from "../IWalletRepository";

const prisma = new PrismaClient()

export class SqliteWalletRepository implements IWalletRepository {
    async save(wallet: Wallet): Promise<void> {
        await prisma.wallets.create({
            data: wallet
        })
    }

    async findByName(email: string): Promise<Wallet> {
        const wallet = await prisma.wallets.findFirst({
            where: { email }
        })
        return wallet
    }
}