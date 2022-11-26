export abstract class View<T>{
    
    protected element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    public update(model: T): void{
        const  template = this.template(model);
        this.element.innerHTML = template;
    }
    
    // METODO ABSTRATO FUNCIONA COMO UMA INTERFACE, METODO TEM QUE SER SOBSCRITO
    protected abstract template(model: T): string;

}