import {GeneratorCommandService} from "./command/service/GeneratorCommandService";
import {ManualCommandType} from "./command/manual/ManualCommandType";
import {ManualCommandTypeVar} from "./command/manual/ManualCommandTypeVar";
import {ManualCommandRilesType} from "./command/manual/ManualCommandRilesType";
import {ManualCommandIfsType} from "./command/manual/ManualCommandIfsType";
import {ManualCommandIfsOperator} from "./command/manual/ManualCommandIfsOperator";
import {ManualCommandSqlData} from "./command/manual/ManualCommandSqlData";

const  test2 = new GeneratorCommandService();
test2.addCommand();
test2.addCommand();
test2.addCommand();

test2.command[0].type = ManualCommandType.validate;
test2.command[0].validate[0].riles[0].error = "Ошибка";
test2.command[0].validate[0].riles[0].type = ManualCommandRilesType.var;
test2.command[0].validate[0].riles[0].update_params("type", ManualCommandTypeVar.Integer);

test2.command[0].validate[0].addRiles();
test2.command[0].validate[0].riles[1].error = "Ошибка2";
test2.command[0].validate[0].riles[1].type = ManualCommandRilesType.req;

test2.command[1].type = ManualCommandType.postgresql;
test2.command[1].key = "user";
test2.command[1].addIfs(ManualCommandIfsType.dataset);
test2.command[1].addIfs(ManualCommandIfsType.operator);
test2.command[1].addIfs(ManualCommandIfsType.value);
test2.command[1].ifs[0].dataset.addKey();
test2.command[1].ifs[0].dataset.updateKey(0, "status");
test2.command[1].ifs[1].operator = ManualCommandIfsOperator["=="];
test2.command[1].ifs[1].value = "1";
test2.command[1].sql.text = "select * from user where id = ? or name = ?";
test2.command[1].sql.generationData();
test2.command[1].sql.data[0]._keyObject = ManualCommandSqlData.dataset;
test2.command[1].sql.data[1]._keyObject = ManualCommandSqlData.params;


test2.command[2].type = ManualCommandType.block;
test2.command[2].addChildren();
test2.command[2].children[0].type = ManualCommandType.postgresql;
test2.command[2].children[0].key = "test_children";

/* отладка */
test2.command[0].validate[0].addRiles();
test2.command[0].validate[0].deleteRiles(2);


console.log(JSON.stringify(test2.command));