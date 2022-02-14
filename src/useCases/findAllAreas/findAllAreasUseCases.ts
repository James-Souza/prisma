import { IAreaRepository } from "../../repositories/IAreaRepository";

export class FindaAllAreasUseCases {
    constructor(
        private iAreaReposiroty: IAreaRepository
    ) {}

    async execute() {
        const areas = await this.iAreaReposiroty.findAll()
        return areas
    }
}