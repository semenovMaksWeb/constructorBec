import {ModelSelect} from "../../libs/ModelSelect";

export const enum ManualCommandIfsType {
    dataset = "dataset",
    params = "params",
    value="value",
    operator="operator"
}

export const manualCommandIfsTypeList:ModelSelect[] = [
    {
        id: 1,
        value: "dataset"
    },
    {
        id: 2,
        value: "params"
    },
    {
        id: 3,
        value: "value"
    },
    {
        id: 4,
        value: "operator"
    }
]
