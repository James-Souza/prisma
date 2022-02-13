import { Router } from "express";
import { createCharacterController } from "../useCases/createCharacter";
import { createWalletController } from "../useCases/createWallet";
import { findCharacterController } from "../useCases/findCharacter";
import { findWalletController } from "../useCases/findWallet";

export const router = Router()

router.get('/', (request, response) => {
    return response.send('Olá')
})
// Character
router.post('/setCharacter', async (request, response) => {
    return await createCharacterController.handle(request, response)
})

router.get('/getCharacter', async (request, response) => {
    return await findCharacterController.handle(request, response)
})

// Wallet
router.get('/getWallet', async (request, response) => {
    return await findWalletController.handle(request, response)
})

router.post('/setWallet', async (request, response) => {
    return await createWalletController.handle(request, response)
})