import { ModelCommand } from "../model/ModelCommand";

export class GeneratorCommandService2 {
    private command: ModelCommand[] = [];
    get commandGet(){
        return this.command;
    }

    public addCommand(){
        this.command.push(new ModelCommand());
    }
 }