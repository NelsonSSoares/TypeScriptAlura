export class View {
    // ? INDICA PARAMETRO OPCIONAL
    constructor(selector, escapar) {
        this.escapar = false;
        this.element = document.querySelector(selector);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        //remove scripts maliciosos do metodo template
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
