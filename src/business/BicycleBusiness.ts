import { BicycleDatabase } from "../data/BicycleDataBase";
import { Bicycle, BicycleInputDTO } from "./entities/Bicycle";
import { CustomError } from "./error/CustomError";

export class BicycleBusiness {

    constructor(
        private bicycleDatabase: BicycleDatabase,
    ) { }

    async createBicycle(bike: BicycleInputDTO) {

        await this.bicycleDatabase.createBicycle(bike);

    }

    async getAllBicycle() {

        const bicycles = await this.bicycleDatabase.getAllBicycle();

        return bicycles;
    }

    async getBicycleByColor(color: string) {

        const bicycles = await this.bicycleDatabase.getBicycleByColor(color);

        return bicycles;
    }

    async getBicycleByPrice(price: number) {

        const bicycles = await this.bicycleDatabase.getBicycleByPrice(price);

        return bicycles;
    }

    async changePrice(id: number, price: number) {

        await this.bicycleDatabase.changePrice(id, price);

    }

    async sellBike(id: number) {
        let bike = await this.bicycleDatabase.getBicycleById(id);
        if(!bike){
            throw new CustomError(402, "bicicleta não encontrada")
        }

        let newQuant: number = bike.estoque - 1;
        
        await this.bicycleDatabase.sellBike(id, newQuant);

    }
}