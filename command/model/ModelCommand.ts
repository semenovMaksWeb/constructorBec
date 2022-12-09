import {ModelCommandValidate} from "./ModelCommandValidate";
import {ModelCommandIfs} from "./ModelCommandIfs";
import {ModelCommandSql} from "./ModelCommandSql";
import {ManualCommandType} from "../manual/ManualCommandType";

export class ModelCommand {
    private ifs?: ModelCommandIfs[];
    private sql?: ModelCommandSql;
    private validate?: ModelCommandValidate[];
    private _key: string;
    private _type: string;

    constructor() {
        this._key = "";
        this._type = ManualCommandType.null;
    }

    get type(){
        return this._type;
    }

    set type(type: string){
        this._type = type;
        switch (type){
            case ManualCommandType.validate: {
                this.validate = [new ModelCommandValidate()];
                break;
            }
            case ManualCommandType.postgresql: {
                break;
            }
        }
    }

    get key(){
        return this._key;
    }
    set key(key: string){
        this._key = key;
    }
}