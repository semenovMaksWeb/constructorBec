import {ModelCommandData} from "../ModelCommandData";

export class ModelCommandSqlData extends ModelCommandData {
    private _type: string;
    private readonly _index: number;
    _keyObject: string;

    constructor(index:number, type:string) {
        super();
        this._index = index;
        this._type= type;
    }

    get index(){
        return this._index;
    }

    get type(){
        return this._type;
    }

    set type(type:string){
        this._type = type;
    }

    get keyObject(){
        return this._keyObject;
    }

    set keyObject(key:string){
        this._keyObject = key;
    }

}
