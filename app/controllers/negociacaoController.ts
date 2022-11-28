import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/messageView.js";
import { NegociacoesView } from "../views/negociacoesViews.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private messageView = new MessageView('#messageView');

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    

    public adiciona(): void{

       const negociacao = this.criaNegociacao();
       
       if(!this.ehDiaUtil(negociacao.data)){
            this.messageView.update("Apenas negociações em dias uteis são permitidas");
            return;
        }
       
       this.negociacoes.adiciona(negociacao);
       this.limparForm();
       this.atualizaView();
        
    }

    private criaNegociacao(): Negociacao{

        const regexp = /-/g;
        const date = new Date(this.inputData.value.replace(regexp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
       
        return new Negociacao(date, quantidade, valor);

    }

    private limparForm(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update("Negociação adicionada com sucesso");
    }
    private ehDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}