import { v4 as uuidv4} from 'uuid'
import { iCharacter } from './repositories/ICharacterRepositories'

const Character:iCharacter = {
    id: uuidv4(),
    name: 'Lian Hu',
    level: '51',
    characterPower: '31000',
    email: 'a12k@gmail.com',
    darksteel: '300',
    createdAt: new Date(),
    updateAt: new Date(),
}


export { Character }