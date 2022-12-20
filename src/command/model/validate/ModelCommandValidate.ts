import {ModelCommandValidateRiles} from "./ModelCommandValidateRiles";
import {ManualCommandRilesType} from "../../manual/ManualCommandRilesType";
import {ModelKey} from "../ModelKey";

export class ModelCommandValidate extends  ModelKey{
    private readonly _riles: ModelCommandValidateRiles[];

    constructor() {
        super();
        this.key = null;
        this._riles = [new ModelCommandValidateRiles()];
    }

    get riles(){
        return this._riles;
    }

    public addRiles(){
        this._riles.push(new ModelCommandValidateRiles());
    }

    public deleteRiles(index:number){
        this._riles.splice(index, 1);
    }
}