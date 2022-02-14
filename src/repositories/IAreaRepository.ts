import { Area } from "../entities/Area";

export interface IAreaRepository {
    findAll():Promise<Area[]>
}