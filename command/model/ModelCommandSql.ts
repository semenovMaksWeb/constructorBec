import {ModelCommandSqlData} from "./ModelCommandSqlData";
import {ManualCommandTypeVar} from "../manual/ManualCommandTypeVar";
import {ManualCommandSqlConvertType} from "../manual/ManualCommandSqlConvertType";

export class ModelCommandSql {
    private _data?: ModelCommandSqlData[];
    private _text: string;
    private _convert: string;

    constructor() {
        this._convert = ManualCommandSqlConvertType.Array;
    }

    get data(){
        return this._data;
    }

    get text(){
        return this._text;
    }
    set text(text:string){
        this._text = text;
    }

    get convert(){
        return this._convert;
    }

    set convert(convert:string){
        this._convert = convert;
    }

    public generationData(){
        const element =this._text.match(/\?/gi).length;
        this._data = [];
        for (let i = 1; i <= element; i++) {
            this._data.push(new ModelCommandSqlData(i, ManualCommandTypeVar.String));
        }
    }


}