import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "./imprimivel.js";


export function imprimir(...objs: Array<Imprimivel>){
    for (const obj of objs) {
        console.log(obj.paraTexto());
        
    }
}