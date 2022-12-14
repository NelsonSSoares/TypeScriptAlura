export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'Milesegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'Segundos';
            }
            else {
                divisor;
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Execução do Metedo ${propertyKey}, Tempo :${(t2 - t1) / divisor} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logarTempoDeExecucao.js.map