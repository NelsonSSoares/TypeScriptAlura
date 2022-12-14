import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";


export class Negociacoes implements Modelo<Negociacoes>{
   
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

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }

}


/*
PPP
public
protected
private 
visibity like java
*/