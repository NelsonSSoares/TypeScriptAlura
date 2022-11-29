export function logarTempoDeExecucao(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){

        const metodoOriginal = descriptor.value;
                            // quantidade indefinida de parametro, tranforma a quantidade de param em array de qualquer tipo
        descriptor.value = function(...args: Array<any>){
            const t1 = performance.now();

            const retorno = metodoOriginal.apply(this, args);

            const t2 = performance.now();
            console.log(`Execução do Metedo ${propertyKey}, Tempo :${(t2-t1)/1000} segundos`);
            retorno
        };

        return descriptor;
    }
}