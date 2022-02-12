import { Router } from "express";
import { SqliteCharacterRepository } from "../repositories/implementation/SqliteCharacterRepositories";
import { Character } from "../entities/Character";
import { CallTracker } from "assert";

const db = new SqliteCharacterRepository()

export const router = Router()

router.get('/', (req, res) => {
    return res.send('Olá')
    // return res.json({
    //     name: 'teste'
    // })
})

router.post('/setCharacter', async (req, res) => {
    try {
        console.log(req.body)
        const data:Character = new Character(req.body)
        await db.save(data)
        return res.status(201).json('User created successfully.')
    } catch (err) {
        console.log(err)
        return res.status(406).json(err)
    }
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