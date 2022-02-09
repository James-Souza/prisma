import { Character } from "../entities/Character"
import { ICharacter } from "../useCases/createCharacterDTO"

const user: ICharacter = {
  name: 'asdasd',
  level: '1',
  characterPower: '414',
  email: '3124',
  darksteel: 'loasfk',
  createdAt: new Date(),
  updateAt: new Date(),
  hp: '10',
  mp: '690',
  physicalATK: '235',
  physicalDEF: '54360',
  speelDEF: '1123',
}

const character = new Character(user, '1')
// const info = character.execute()
// console.log(info)
