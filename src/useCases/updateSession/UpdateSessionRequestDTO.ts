export interface IUpdateSessionRequestDTO {
    character: string
    area: string
    status: string
    initialValue: number
    initialTime: Date
    finalValue: number
    finalTime: Date
    serverDate: string
    updatedAt: Date
}