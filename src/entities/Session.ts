import { v4 as uuidv4 } from 'uuid'

export class Session {
    public readonly id: string

    public area: string
    public inicio: string
    public status: string
    public name: string
    public time: string

    constructor(props: Omit<Session, 'id'>, id?:string) {
        if(!id) {
            this.id = uuidv4()
        } else {
            this.id = id
        }
    }
}