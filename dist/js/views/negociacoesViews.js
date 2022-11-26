export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td>?</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
                <tbody>
                
                </tbody>
            </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = this.template(model);
    }
}
