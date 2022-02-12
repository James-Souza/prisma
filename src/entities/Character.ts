import { v4 as uuidv4 } from 'uuid'

export class Character {
  public readonly id: string

  public name: string
  public level: string
  public characterPower: string
  public email: string
  public darksteel: string
  public hp: string
  public mp: string
  public physicalATK: string
  public physicalDEF: string
  public speelDEF: string
  public createdAt: string
  public updatedAt: string
  

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

