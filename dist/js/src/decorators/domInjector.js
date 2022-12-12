export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`buscando prototype ${target.constructor.name}
         e adiocnando getter para a propriedade ${propertyKey}`);
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
            }
            console.log(`buscando elemento do DOM com o seletor: ${selector} para injetar em: ${propertyKey} `);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
