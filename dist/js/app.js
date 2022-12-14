import { NegociacaoController } from "./src/controllers/negociacaoController.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possivel iniciarlizar a aplicação, vrifique se o form existe!");
}
const botaoImporta = document.querySelector("#botao-importa");
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        controller.importaDados();
    });
}
else {
    throw Error("Botão importa não encontrado!");
}
//# sourceMappingURL=app.js.map