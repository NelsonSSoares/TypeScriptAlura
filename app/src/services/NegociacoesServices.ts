import { NegociacoeDoDia } from "../interfaces/NegociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices{

    public obterNegociacoes(): Promise<Negociacao[]> {
           
        return fetch('http://localhost:8080/dados')
        .then(response => response.json())
        .then((dados: NegociacoeDoDia[]) => {
            
            return dados.map(dado =>{
                return new Negociacao(new Date(), dado.vezes, dado.montante)
            })

        })
    }
}