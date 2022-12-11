import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";

export abstract class View<T>{
    
    protected element: HTMLElement;



// ? INDICA PARAMETRO OPCIONAL
    constructor(selector: string){
        const element = document.querySelector(selector);
        
        if(element){
            this.element = element as HTMLElement;
        }else{
            throw Error(`Seletor ${selector} não existe no DOM`);
        }

    }


    public update(model: T): void{       
        
        let  template = this.template(model);
        //remove scripts maliciosos do metodo template
        this.element.innerHTML = template;
        
    }
    
    // METODO ABSTRATO FUNCIONA COMO UMA INTERFACE, METODO TEM QUE SER SOBSCRITO
    protected abstract template(model: T): string;

}