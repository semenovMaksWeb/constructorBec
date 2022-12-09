import {ModelObjectAny} from "../../libs/ModelObjectAny";
import {ManualCommandRilesType} from "../manual/ManualCommandRilesType";

export class ModelCommandValidateRiles{
    private type: String
    private error: String
    private params?: ModelObjectAny

    constructor() {
        this.type = ManualCommandRilesType.null;
        this.error = "";
        this.params = null;
    }
}