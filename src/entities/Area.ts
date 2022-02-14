import { randomUUID } from "crypto"

export class Area {
    public readonly id

    public name

    constructor(props: Omit<Area, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            id: randomUUID()
        }
        else {
            this.id = id
        }
    }
}