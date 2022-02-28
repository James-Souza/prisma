import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UpdateSessionUseCases } from "./UpdateSessionUseCases";

const prisma = new PrismaClient()

export class UpdateSessionControler {
    constructor(
        private updateSessionUseCases: UpdateSessionUseCases
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const dataToupdate = request.body
            await this.updateSessionUseCases.execute(dataToupdate)
            return response.status(201).json({
                message: 'Atualizado com Sucesso'
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}

