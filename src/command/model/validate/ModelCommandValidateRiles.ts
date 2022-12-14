import {ModelObjectAny} from "../../../libs/ModelObjectAny";
import {ManualCommandRilesType} from "../../manual/ManualCommandRilesType";
import {ManualCommandTypeVar} from "../../manual/ManualCommandTypeVar";
import {ModelSelect} from "../../../libs/ModelSelect";

export class ModelCommandValidateRiles{
    private _type: ModelSelect
    private _error: string
    private _params?: ModelObjectAny

    constructor() {
        this.type = { id:null, value: null };
        this._error = "";
        this._params = null;
    }

    set type(type:ModelSelect){
        this._type = type;
        switch (type.value){
            case ManualCommandRilesType.var: {
                this._params = {type: ManualCommandTypeVar.String};
                break;
            }
            case ManualCommandRilesType.req:{
                this._params = null;
                break;
            }
        }
    }

    get type(){
        return this._type;
    }

    set error(error:string){
        this._error = error;
    }

    get error(){
        return this._error;
    }
    /** TODO */
    public update_params(key:string, value:any){
        this._params[key] = value;
    }
}