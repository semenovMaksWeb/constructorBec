import {GeneratorCommandService} from "./command/service/GeneratorCommandService";
import {ManualCommandRilesType} from "./command/manual/ManualCommandRilesType";
import {ManualCommandTypeVar} from "./command/manual/ManualCommandTypeVar";
import {ManualCommandType} from "./command/manual/ManualCommandType";

const  test = new GeneratorCommandService();
test.addCommand();
test.updateKeyCommand(0, null);
test.updateType(ManualCommandType.validate, 0);
test.updateValidateKey(0, 0, 'name');
test.updateValidateRulesType(0,0, 0, ManualCommandRilesType.var);
test.updateValidateRulesError(0,0, 0, "Имя является строкой");
test.updateValidateRulesParamsKey(0,0, 0, "type", ManualCommandTypeVar.String);

test.addValidateRules(0,0);
test.updateValidateRulesType(0,0, 1, ManualCommandRilesType.req);
test.updateValidateRulesError(0,0, 1, "Имя является обязательным полем");

test.addCommand();
test.addIfsDataset(1);
test.addIfsOperator(1);
test.addIfsValue(1);

test.updateIfsOperator(1, 1, "==");
test.updateIfsValue(1,2, 1);
test.addIfsDatasetKey(1, 0);
test.updateIfsDatasetKey(1, 0, 0, "status");

test.addCommand();

test.updateType(ManualCommandType.return, 2);
test.updateKeyCommand(2, "status");


console.log(JSON.stringify(test.getCommand()));