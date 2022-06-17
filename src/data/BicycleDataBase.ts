import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../business/error/CustomError";
import { Bicycle, BicycleInputDTO } from "../business/entities/Bicycle";

export class BicycleDatabase extends BaseDatabase {

    private static TABLE_NAME = "bicicleta";


    public async createBicycle(bike: BicycleInputDTO): Promise<void> {
        try {
            await BaseDatabase.connection
                .insert({
                    cor: bike.cor,
                    marchas: bike.marchas,
                    marca: bike.marca,
                    modelo: bike.modelo,
                    preco: bike.preco,
                    estoque: bike.estoque
                })
                .into(BicycleDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getAllBicycle(): Promise<Bicycle[]> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(BicycleDatabase.TABLE_NAME);
            return result;
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getBicycleById(id: number): Promise<Bicycle> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(BicycleDatabase.TABLE_NAME)
                .where({ id: id });

            return result[0];
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }


    public async getBicycleByColor(color: string): Promise<Bicycle[]> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(BicycleDatabase.TABLE_NAME)
                .where({ cor: color });

            return result;
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getBicycleByPrice(price: number): Promise<Bicycle[]> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(BicycleDatabase.TABLE_NAME)
                .where({ preco: price });

            return result;
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async changePrice(id: number, price: number) {
        try {
            await BaseDatabase.connection
                .where({ id: id })
                .update({ preco: price })
                .from(BicycleDatabase.TABLE_NAME);

        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async sellBike(id: number, number: number) {
        try {
            await BaseDatabase.connection
                .where({ id: id })
                .update({ estoque: number })
                .from(BicycleDatabase.TABLE_NAME);

        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

}