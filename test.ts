import {GeneratorCommandService2} from "./command/service/GeneratorCommandService2";
import {ManualCommandType} from "./command/manual/ManualCommandType";

const  test2 = new GeneratorCommandService2();
test2.addCommand();
test2.addCommand();

test2.commandGet[0].type = ManualCommandType.validate;
test2.commandGet[1].type = ManualCommandType.postgresql;
test2.commandGet[1].key = "user";

console.log(test2.commandGet);

for (const a  of test2.commandGet){
    console.log(a.type);
    console.log(a.key);
}