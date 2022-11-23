import { Negociacao } from "./negociacao.js";


export class Negociacoes{
                        //abreviacao de Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

                    //somente leitura, não permite alterações | public lista(): ReadonlyArray<Negociacao>
    public lista(): readonly Negociacao[]{
        
        return this.negociacoes;

    }
}

/*
PPP
public
protected
private 
visibity like java
*/