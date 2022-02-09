import { v4 as uuidv4 } from 'uuid'
import { iCharacter } from '../useCases/createUseDTO'

export class Character {
  public readonly id: string

  public name: string
  public level: string
  public characterPower: string
  public email: string
  public darksteel: string
  public createdAt: Date
  public updateAt: Date

  constructor(props: iCharacter, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuidv4()
    }
    else {
      this.id = id
    }
  }

  execute() {
    return  {
      this: this
    }
  }

  save() {}
}

