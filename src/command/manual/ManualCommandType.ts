import { ModelSelect } from "../../libs/ModelSelect";

export const enum ManualCommandType{
    validate = "validate",
    return = "return",
    postgresql = "postgresql",
    convert = "convert",
    null = "",
    block="block"
}

export const manualCommandTypeList:ModelSelect[] = [
    {
        id: 1,
        value: "validate"
    },
    {
        id: 2,
        value: "return"
    },
    {
        id: 3,
        value: "postgresql"
    },
    {
        id: 4,
        value: "convert"
    },
    {
        id: 5,
        value: "block"
    }
]
