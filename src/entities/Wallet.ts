export class Wallet {
    public readonly email: string

    public draco: string
    public hydra: string
    public createdAt: Date
    public updatedAt: Date

    constructor(props: Omit<Wallet, 'email'>, email?: string) {
        Object.assign(this, props)

        if (!email) {
            throw new Error('E-mail is a mandatory data.')
        }
    }
}