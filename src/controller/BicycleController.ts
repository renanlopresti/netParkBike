import { Request, Response } from "express";
import { BicycleBusiness } from "../business/BicycleBusiness";
import { Bicycle, BicycleInputDTO } from "../business/entities/Bicycle";
import { BicycleDatabase } from "../data/BicycleDataBase";


const bicycleBusiness = new BicycleBusiness(
    new BicycleDatabase()
);


export class BicycleController {

    async createBicycle(req: Request, res: Response) {
        try {
            const input: BicycleInputDTO = {
                cor: req.body.cor,
                marchas: req.body.marchas,
                marca: req.body.marca,
                modelo: req.body.modelo,
                preco: req.body.preco,
                estoque: req.body.estoque
            }

            await bicycleBusiness.createBicycle(input);

            res.status(200).send({ message: 'Bicicleta criada com sucesso' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getAllBicycle(req: Request, res: Response) {
        try {

            const bicyles: Bicycle[] = await bicycleBusiness.getAllBicycle();

            res.status(200).send({ bicyles });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getBicycleByColor(req: Request, res: Response) {
        try {
            const color = req.query.color as string;

            const bicyles: Bicycle[] = await bicycleBusiness.getBicycleByColor(color);

            res.status(200).send({ bicyles });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getBicycleByPrice(req: Request, res: Response) {
        try {
            const price = Number(req.query.price);

            const bicyles: Bicycle[] = await bicycleBusiness.getBicycleByPrice(price);

            res.status(200).send({ bicyles });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async changePrice(req: Request, res: Response) {
        try {
            const id = req.body.id;
            const price = req.body.preco;

            await bicycleBusiness.changePrice(id, price);

            res.status(200).send({ message: 'Preço atualizado com sucesso' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async sellBike(req: Request, res: Response) {
        try {
            const id = Number(req.body.id);

            await bicycleBusiness.sellBike(id);

            res.status(200).send({ message: 'Bicicleta vendida com sucesso' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }
}