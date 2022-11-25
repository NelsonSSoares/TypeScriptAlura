

export class NegociacoesView{
    
    private elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
       
    }

    public template(): string{
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
                
                <tbody>
                
                </tbody>
            </table>
        `;

    }

    public update(): void{
        this.elemento.innerHTML = this.template();
        
    }

}