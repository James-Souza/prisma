import { v4 as uuidv4 } from 'uuid'

export class Area {
    public readonly id: string

    public name: string

    constructor(props: Omit<Area, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuidv4()
        }
        else {
            this.id = id
        }
    }
}