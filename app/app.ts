import { NegociacaoController } from "./controllers/negociacaoController.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');
if(form){

    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
    
}else{
    throw Error("Não foi possivel iniciarlizar a aplicação, vrifique se o form existe!");
}







