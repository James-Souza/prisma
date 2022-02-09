import { Router } from "express";

export const router = Router()

router.get('/', (req, res) => {
    return res.send('Olá')
    // return res.json({
    //     name: 'teste'
    // })
})
 
router.post('/createCharacter', (req, res) => {
    console.log(req.body)
    return res.status(201).json(req.body) 
})