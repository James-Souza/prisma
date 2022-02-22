export interface ICreateSessionRequestDTO {
    id: string
    character: string
    area: string
    status: string
    initialValue: number
    initialTime: Date
    finalValue: number
    finalTime: Date
    serverDate: string
    createdAt: Date
    updatedAt: Date
}