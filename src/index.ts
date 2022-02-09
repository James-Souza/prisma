import { Character } from "./entities/Character"

const user = {
    name: 'asdasd',
    level: '1',
    characterPower: '414',
    email: '3124',
    darksteel: 'loasfk',
    createdAt: new Date(),
    updateAt: new Date(),
  }

  
const character = new Character(user , '1')
const info = character.execute()
console.log(info)
