import {ModelCommandData} from "./ModelCommandData";
import {ManualCommandIfsType} from "../manual/ManualCommandIfsType";
import { ModelSelect } from "../../libs/ModelSelect";

export class ModelCommandIfs{
    private readonly _dataset?: ModelCommandData
    private readonly _params?: ModelCommandData;
    private _value?: any;
    private _operator?: ModelSelect;

    constructor(type:string) {
        switch (type){
            case ManualCommandIfsType.dataset:
                this._dataset = new ModelCommandData();
                break;
            case ManualCommandIfsType.params:
                this._params = new ModelCommandData();
                break;
            case ManualCommandIfsType.value:
                this._value = null
                break;
            case ManualCommandIfsType.operator:
                this._operator = { id: null, value: null }
                break;
        }
    }

    get dataset(){
        return this._dataset;
    }

    get params(){
        return this._params;
    }

    get value(){
        return this._value;
    }

    get operator(){
        return this._operator;
    }

    set value(value:any){
        this._value = value;
    }

    set operator(operator:ModelSelect){
        this._operator = operator;
    }

}
