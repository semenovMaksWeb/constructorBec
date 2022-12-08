import {ModelCommandValidate} from "./ModelCommandValidate";
import {ModelCommandIfs} from "./ModelCommandIfs";
import {ModelCommandSql} from "./ModelCommandSql";

export interface ModelCommand {
    ifs?: ModelCommandIfs[],
    sql?: ModelCommandSql,
    validate?: ModelCommandValidate[],
    key: String;
    type: String;
}