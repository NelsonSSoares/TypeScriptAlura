export class Negociacoes {
    constructor() {
        //abreviacao de Array<Negociacao>
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //somente leitura, não permite alterações | public lista(): ReadonlyArray<Negociacao>
    lista() {
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
