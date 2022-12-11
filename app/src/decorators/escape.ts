export function escape(
    targe: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
        let retorno =  metodoOriginal.apply(this, args);
        if(typeof retorno === 'string'){            // revela o nome da classe 
            //console.log(`@escape em ação na classe ${this.constructor.name}`);
            
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/,'');
        }
    }
    return descriptor;
}