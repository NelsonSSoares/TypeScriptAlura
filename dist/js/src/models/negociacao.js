import { Imprimivel } from "../utils/imprimivel.js";
export class Negociacao extends Imprimivel {
    constructor(_data, _quantidade, _valor) {
        super();
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const regexp = /-/g;
        const date = new Date(dataString.replace(regexp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    paraTexto() {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
    }
}
