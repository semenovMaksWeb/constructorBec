import {ModelObjectAny} from "../../libs/ModelObjectAny";

export interface ModelCommandValidate {
    key: String;
    riles: {
        type: String,
        error: String,
        params: ModelObjectAny,
    }[];
}