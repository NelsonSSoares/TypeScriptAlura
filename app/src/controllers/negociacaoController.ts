import { domInjector } from "../decorators/domInjector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesServices } from "../services/negociacoesServices.js";
import { imprimir } from "../utils/imprimir.js";
import { MessageView } from "../views/messageView.js";
import { NegociacoesView } from "../views/negociacoesViews.js";

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector("#quantidade")
    private inputQuantidade: HTMLInputElement;
    @domInjector("#valor")
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private messageView = new MessageView('#messageView');
    private negociacaoService = new NegociacoesServices();


    constructor(){
        // as HTMLInputElement força o typo, querySelector retorna HTMLInputElement ou null neste caso faz o casting explicito e troca o null por as HTMLInputElement
        //this.inputData = <HTMLInputElement> document.querySelector('#data');
        //this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        //this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect()
    @logarTempoDeExecucao(true)
    public adiciona(): void{

        const negociacao = Negociacao.criaDe(
        this.inputData.value,
        this.inputQuantidade.value,
        this.inputValor.value

       );

       if(!this.ehDiaUtil(negociacao.data)){
            this.messageView.update("Apenas negociações em dias uteis são permitidas");
            return;
        }
       
       this.negociacoes.adiciona(negociacao);
       imprimir(negociacao, this.negociacoes);
       this.limparForm();
       this.atualizaView();
        
    }


    public importaDados(): void{
        
        this.negociacaoService.obterNegociacoes()
        .then(negociacoesDeHoje =>{
            return negociacoesDeHoje.filter(negociacoesDeHoje =>{
                return !this.negociacoes.lista()
                .some(negociacao => negociacao.ehIgual(negociacoesDeHoje))
            })
        })
        .then(negociacoesDeHoje => {
            for(let negociacao of negociacoesDeHoje){
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
        
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