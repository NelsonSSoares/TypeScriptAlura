import { Negociacoes } from "../models/negociacoes.js";


export class NegociacoesView{
    
    private elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
       
    }

    public template(model: Negociacoes): string{
        //classes do bootstrap
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                    ${
                       model.lista().map(negociacao =>{
                        return `
                            <tr>
                                <td>?</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                       }).join('')
                    }
                <tbody>
                
                </tbody>
            </table>
        `;

    }

    public update(model: Negociacoes): void{
        const template = this.template(model);
        console.log(template);
        
        this.elemento.innerHTML = this.template(model);
        
    }


}