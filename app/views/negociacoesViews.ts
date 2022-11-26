import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";


export class NegociacoesView extends View{
    

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
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
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
        
        this.element.innerHTML = this.template(model);
        
    }


}