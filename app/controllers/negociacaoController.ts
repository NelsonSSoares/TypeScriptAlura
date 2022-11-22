import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector("#valor");
    }
    

    public adiciona(): void{

       const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }

    public criaNegociacao(): Negociacao{
        
        const regexp = /-/g;
        const date = new Date(this.inputData.value.replace(regexp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
       
        return new Negociacao(date, quantidade, valor);
    }
}