import {ModelCommandValidateRiles} from "./ModelCommandValidateRiles";
import {ManualCommandRilesType} from "../manual/ManualCommandRilesType";

export class ModelCommandValidate {
    private key: String;
    private riles: ModelCommandValidateRiles[];

    constructor() {
        this.key = "";
        this.riles = [new ModelCommandValidateRiles()];
    }
}