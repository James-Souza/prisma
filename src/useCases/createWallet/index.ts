import { SqliteWalletRepository } from '../../repositories/implementation/SqliteWalletRepository'
import { CreateWalletUseCases } from './createWalletUseCases'
import { CreateWalletController } from './createWalletController'

const sqliteWalletRepository = new SqliteWalletRepository()

const createWalletUseCases = new CreateWalletUseCases(sqliteWalletRepository)

const createWalletController = new CreateWalletController(createWalletUseCases)

export { createWalletController, createWalletUseCases }