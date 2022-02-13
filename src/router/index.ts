import { Router } from "express";
import { createCharacterController } from "../useCases/createCharacter";
import { createWalletController } from "../useCases/createWallet";
import { findCharacterController } from "../useCases/findCharacter";
import { findAllCharacterController } from "../useCases/findAllCharacter";
import { findWalletController } from "../useCases/findWallet";

export const router = Router()

router.get('/', (request, response) => {
    return response.send('Olá')
})
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

// Wallet
router.get('/getWallet/:email', async (request, response) => {
    return await findWalletController.handle(request, response)
})

router.post('/setWallet', async (request, response) => {
    return await createWalletController.handle(request, response)
})