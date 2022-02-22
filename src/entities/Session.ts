import { v4 as uuidv4 } from 'uuid'

export class Session {
    public readonly id: string

    public character: string
    public area: string
    public status: string
    public initialValue: number
    public initialTime: Date
    public finalValue: number
    public finalTime: Date
    public serverDate: string
    public createdAt: Date
    public updatedAt: Date

    constructor(props: Omit<Session, 'id'>, id?: string) {
        Object.assign(this, props)
        if (!id) {
            this.id = uuidv4()
        } else {
            this.id = id
        }
    }
}