import {GeneratorCommandService2} from "./command/service/GeneratorCommandService2";
import {ManualCommandType} from "./command/manual/ManualCommandType";
import {ManualCommandTypeVar} from "./command/manual/ManualCommandTypeVar";
import {ManualCommandRilesType} from "./command/manual/ManualCommandRilesType";
import {ManualCommandIfsType} from "./command/manual/ManualCommandIfsType";
import {ManualCommandIfsOperator} from "./command/manual/ManualCommandIfsOperator";

const  test2 = new GeneratorCommandService2();
test2.addCommand();
test2.addCommand();

test2.commandGet[0].type = ManualCommandType.validate;
test2.commandGet[0].validate[0].riles[0].error = "Ошибка";
test2.commandGet[0].validate[0].riles[0].type = ManualCommandRilesType.var;
test2.commandGet[0].validate[0].riles[0].update_params("type", ManualCommandTypeVar.Integer);

test2.commandGet[0].validate[0].addRiles();
test2.commandGet[0].validate[0].riles[1].error = "Ошибка2";
test2.commandGet[0].validate[0].riles[1].type = ManualCommandRilesType.req;

test2.commandGet[1].type = ManualCommandType.postgresql;
test2.commandGet[1].key = "user";
test2.commandGet[1].addIfs(ManualCommandIfsType.dataset);
test2.commandGet[1].addIfs(ManualCommandIfsType.operator);
test2.commandGet[1].addIfs(ManualCommandIfsType.value);
test2.commandGet[1].ifs[0].dataset.addKey();
test2.commandGet[1].ifs[0].dataset.updateKey(0, "status");
test2.commandGet[1].ifs[1].operator = ManualCommandIfsOperator["=="];
test2.commandGet[1].ifs[1].value = "1";
test2.commandGet[1].sql.text = "select * from user where id = ? or name = ?";
test2.commandGet[1].sql.generationData();

/* отладка */
test2.commandGet[0].validate[0].addRiles();
test2.commandGet[0].validate[0].deleteRiles(2);

console.log(JSON.stringify(test2.commandGet));