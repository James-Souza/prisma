import { Router } from "express";
import { createCharacterController } from "../useCases/createCharacter";
import { createWalletController } from "../useCases/createWallet";
import { findCharacterController } from "../useCases/findCharacter";
import { findAllCharacterController } from "../useCases/findAllCharacters";
import { findWalletController } from "../useCases/findWallet";
import { findAllWalletsController } from "../useCases/findAllWallets";
import { findAllAreasController } from "../useCases/findAllAreas";

export const router = Router()

// Character
router.post('/setCharacter', async (request, response) => {
    return await createCharacterController.handle(request, response)
})

router.get('/getCharacter/:name', async (request, response) => {
    return await findCharacterController.handle(request, response)
})

router.get('/getAllCharacters/', async (request, response) => {
    return await findAllCharacterController.handle(request, response)
})

router.get('/getAllWallets/', async (request, response) => {
    return await findAllWalletsController.handle(request, response)
})

// Wallet
router.get('/getWallet/:email', async (request, response) => {
    return await findWalletController.handle(request, response)
})

router.post('/setWallet', async (request, response) => {
    return await createWalletController.handle(request, response)
})

router.get('/getAreas', async (request, response)=> {
    return await findAllAreasController.handle(request, response)
})