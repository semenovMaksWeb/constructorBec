import {ModelCommandValidate} from "./validate/ModelCommandValidate";
import {ModelCommandIfs} from "./ModelCommandIfs";
import {ModelCommandSql} from "./sql/ModelCommandSql";
import {ManualCommandType} from "../manual/ManualCommandType";
import {ModelKey} from "./ModelKey";
import {ModelSelect} from "../../libs/ModelSelect";

export class ModelCommand extends ModelKey{
    private _ifs?: ModelCommandIfs[];
    private _sql?: ModelCommandSql;
    private _validate?: ModelCommandValidate[];
    private _children: ModelCommand[]
    private _type: ModelSelect;

    constructor() {
        super();
        this.key = null;
        this._type = {id:ManualCommandType.null, value: null};
    }

    /* type */
    get type(){
        return this._type;
    }

    set type(type: ModelSelect){
        this._type = type;
        switch (type.value){
            case ManualCommandType.validate: {
                this._validate = [new ModelCommandValidate()];
                break;
            }
            case ManualCommandType.postgresql: {
                this._sql = new ModelCommandSql();
                break;
            }
            case ManualCommandType.block: {
                this._children = [];
                break;
            }
        }
    }

    /* validate */
    get validate(){
        return this._validate;
    }

    public addValidate(){
        this._validate.push(new ModelCommandValidate());
    }

    public deleteValidate(index:number){
        this._validate.splice(index, 1);
    }

    /* ifs */
    get ifs(){
        return this._ifs;
    }

    public addIfs(type:string){
        if (!Array.isArray(this._ifs)){
            this._ifs = [];
        }
        this._ifs.push(new ModelCommandIfs(type));
    }

    public deleteIfs(index:number){
        this._ifs.splice(index, 1);
    }
    /* sql */
    get sql(){
        return this._sql;
    }

    /* children */
    public addChildren(){
        this._children.push(new ModelCommand());
    }

    public deleteChildren(index: number){
        this._children.splice(index, 1);
    }
    get children(){
        return this._children;
    }

}
