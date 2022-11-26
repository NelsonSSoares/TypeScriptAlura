import { View } from "./view.js";

export class MessageView extends View{

    public template(model: string): string{
        return`
            <p class="alert alert-info">${model}</p>
        `;
    }

    public update(model: string): void{
        const  template = this.template(model);
        this.element.innerHTML = template;
    }
}