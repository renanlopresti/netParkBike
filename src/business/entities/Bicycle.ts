
export class Bicycle {
    constructor(
        public readonly id: number,
        public readonly cor: string,
        public readonly marchas: string,
        public readonly marca: string,
        public readonly modelo: string,
        public readonly preco: string,
        public readonly estoque: number
    ) { }

}

export interface BicycleInputDTO {
    cor: string;
    marchas: string;
    marca: string;
    modelo: string;
    preco: string;
    estoque: number;
}

