import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";

export abstract class View<T>{
    
    protected element: HTMLElement;
    private escapar: boolean = false;


// ? INDICA PARAMETRO OPCIONAL
    constructor(selector: string, escapar?: boolean){
        const element = document.querySelector(selector);
        
        if(element){
            this.element = element as HTMLElement;
        }else{
            throw Error(`Seletor ${selector} não existe no DOM`);
        }

        if(escapar){
            this.escapar = escapar;
        }
    }
    @logarTempoDeExecucao()
    public update(model: T): void{       
        
        let  template = this.template(model);
        //remove scripts maliciosos do metodo template
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.element.innerHTML = template;
        
    }
    
    // METODO ABSTRATO FUNCIONA COMO UMA INTERFACE, METODO TEM QUE SER SOBSCRITO
    protected abstract template(model: T): string;

}