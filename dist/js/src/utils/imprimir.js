export function imprimir(...objs) {
    for (const obj of objs) {
        console.log(obj.paraTexto());
    }
}
