export interface ICreateSessionRequestDTO {
    id: string
    area: string
    initialValue: number
    finalValue: number
    status: string
    name: string
    createdAt: Date
    updatedAt: Date
    serverDate: Date
}