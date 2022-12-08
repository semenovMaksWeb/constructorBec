import {ModelCommandSqlData} from "./ModelCommandSqlData";

export interface ModelCommandSql {
    data?: ModelCommandSqlData[];
    text: String,
    convert: String;
}