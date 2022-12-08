import {ModelCommandData} from "./ModelCommandData";

export interface ModelCommandIfs{
    dataset?: ModelCommandData,
    params?: ModelCommandData,
    value?: any,
    operator?: String
}