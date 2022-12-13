import { NegociacoeDoDia } from "../interfaces/NegociacaoDoDia";
import { Negociacao } from "../models/negociacao";

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