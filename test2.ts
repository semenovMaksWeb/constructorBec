// import {GeneratorCommandService} from "./command/service/GeneratorCommandService";
// import {ManualCommandRilesType} from "./command/manual/ManualCommandRilesType";
// import {ManualCommandTypeVar} from "./command/manual/ManualCommandTypeVar";
// import {ManualCommandType} from "./command/manual/ManualCommandType";
// import {GeneratorCommandService2} from "./command/service/GeneratorCommandService2";
//
// const  test2 = new GeneratorCommandService2();
// test2.addCommand();
// test2.updateKeyCommand(0, null);
// test2.updateType(ManualCommandType.validate, 0);
// test2.updateValidateKey(0, 0, 'name');
// test2.updateValidateRulesType(0,0, 0, ManualCommandRilesType.var);
// test2.updateValidateRulesError(0,0, 0, "Имя является строкой");
// test2.updateValidateRulesParamsKey(0,0, 0, "type", ManualCommandTypeVar.String);
//
// test2.addValidateRules(0,0);
// test2.updateValidateRulesType(0,0, 1, ManualCommandRilesType.req);
// test2.updateValidateRulesError(0,0, 1, "Имя является обязательным полем");
//
// test2.addCommand();
// test2.addIfsDataset(1);
// test2.addIfsOperator(1);
// test2.addIfsValue(1);
//
// test2.updateIfsOperator(1, 1, "==");
// test2.updateIfsValue(1,2, 1);
// test2.addIfsDatasetKey(1, 0);
// test2.updateIfsDatasetKey(1, 0, 0, "status");
//
// test2.addCommand();
//
// test2.updateType(ManualCommandType.return, 2);
// test2.updateKeyCommand(2, "status");
//
//
// console.log(JSON.stringify(test2.getCommand()));