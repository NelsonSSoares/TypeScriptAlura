
import { Modelo } from "../interfaces/modelo.js";


export class Negociacao implements Modelo<Negociacao>{
/*
    private _data: Date;
    private _quantidade: number;
    private _valor: number;
*/


    constructor(
        private _data: Date,
        private _quantidade: number, 
        private _valor: number
        ){
           
            
        /*
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        */
    }

    /*
        constructor(
            public readonly data: Date,
            public readonly quantidade: number,
            public readonly valor: number
        ){}
    */

        
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const regexp = /-/g;
        const date = new Date(dataString.replace(regexp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
       
        return new Negociacao(date, quantidade, valor);
    }

    get data(): Date{
        const data  = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._quantidade * this._valor;
    }


    public paraTexto(): string{
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
        
    }

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate() 
        && this.data.getMonth() === negociacao.data.getMonth()
        && this.data.getFullYear() === negociacao.data.getFullYear();
    }

    
}