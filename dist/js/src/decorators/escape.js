export function escape(targe, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape em ação na classe ${this.constructor.name}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
    };
    return descriptor;
}
