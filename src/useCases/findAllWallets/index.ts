import { SqliteWalletRepository } from "../../repositories/implementation/SqliteWalletRepository";
import { FindAllWalletController } from "./findAllWalletController";
import { FindAllWalletsUseCases } from "./findAllWalletsUseCases";

const sqliteWalletRepository = new SqliteWalletRepository()

const findAllWalletsUseCases = new FindAllWalletsUseCases(sqliteWalletRepository)

const findAllWalletsController = new FindAllWalletController(findAllWalletsUseCases)

export { findAllWalletsController }