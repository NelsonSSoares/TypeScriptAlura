export function domInjector(selector) {
    return function (target, propertyKey) {
        const getter = function () {
            const elemento = document.querySelector(selector);
            console.log(`buscando elemento do DOM com o seletor: ${selector} para injetar em: ${propertyKey} `);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
