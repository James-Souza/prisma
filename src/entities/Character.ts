import { v4 as uuidv4 } from 'uuid'

export class Character {
  public readonly id: string

  public name: string
  public level: number
  public characterPower: number
  public email: string
  public darksteel: number
  public hp: number
  public mp: number
  public physicalATK: number
  public physicalDEF: number
  public speelDEF: number
  public createdAt: Date
  public updatedAt: Date
  

  constructor(props: Omit<Character, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.id = uuidv4()
    }
    else {
      this.id = id
    }
  }
}

