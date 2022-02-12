import { Router } from "express";
import { SqliteCharacterRepository } from "../repositories/implementation/SqliteCharacterRepositories";

const db = new SqliteCharacterRepository()

export const router = Router()

router.get('/', (req, res) => {
    return res.send('Olá')
    // return res.json({
    //     name: 'teste'
    // })
})

const data = {
    id: 'eba433c5-7447-45b4-be0a-db6c194fe659',
    createdAt: '09/02/2022 21:05:16',
    name: 'Goku',
    darksteel: '0',
    email: 'null',
    characterPower: '0',
    hp: '0',
    mp: '0',
    physicalATK: '0',
    physicalDEF: '0',
    speelDEF: '0',
    level: '0',
    updatedAt: '09/02/2022 21:05:16'
}
router.post('/setCharacter', async (req, res) => {
    console.log(req.body)
    const { name } = req.body
    const result = await db.findByName(name)
    return res.status(201).json(result)
})

router.post('/createWallet', (req, res) => {
    console.log(req.body)
    return res.status(201).json(req.body)
})


router.get('/getCharacter', async (req, res) => {
    const { name } = req.body
    const result = await db.findByName(name)
    return res.status(201).json(result)
})