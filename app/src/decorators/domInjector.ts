export function domInjector(selector: string){
    return function(target: any, propertyKey: string){

        console.log(`buscando prototype ${target.constructor.name}
         e adiocnando getter para a propriedade ${propertyKey}`);
        
        let elemento: HTMLElement | null = null;

        const getter = function (){
         if(!elemento){
            elemento = <HTMLElement> document.querySelector(selector);
         }   

        
            
            console.log(`buscando elemento do DOM com o seletor: ${selector} para injetar em: ${propertyKey} `);
            
            return elemento;
        
        }

        Object.defineProperty(target, propertyKey,
        {
            get: getter
        });
    }
}