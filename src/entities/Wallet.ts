import { v4 as uuidv4 } from 'uuid'

export class Wallet {
    public readonly id: string

    public email: string
    public draco: string
    public hydra: string
    public createdAt: string
    public updatedAt: string

    constructor(props: Omit<Wallet, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuidv4()
        }
    }
}