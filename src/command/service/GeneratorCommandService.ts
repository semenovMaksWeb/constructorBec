import { ModelCommand } from "../model/ModelCommand";

export class GeneratorCommandService {
    private _command: ModelCommand[] = [];
    get command(){
        return this._command;
    }

    public addCommand(){
        this._command.push(new ModelCommand());
    }

    public deleteCommand(index: number){
        this._command.splice(index, 1);
    }
 }