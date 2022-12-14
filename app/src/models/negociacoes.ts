import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";


export class Negociacoes extends Imprimivel{
                        //abreviacao de Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

                    //somente leitura, não permite alterações | public lista(): ReadonlyArray<Negociacao>
    public lista(): readonly Negociacao[]{
        
        return this.negociacoes;

    }

    
    public paraTexto(): string {
        return `${JSON.stringify(this.negociacoes,null,2)}`;
        
    }
}


/*
PPP
public
protected
private 
visibity like java
*/