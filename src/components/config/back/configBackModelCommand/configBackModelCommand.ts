import { manualCommandTypeList } from "../../../../command/manual/ManualCommandType";
import { ModelSelect } from "../../../../libs/ModelSelect";
import {ConfigBackModelCommandProps} from "./configBackModelCommandProps";

export function configBackModelCommand(props:ConfigBackModelCommandProps){
    const inputKey = (val) => {
        props.modelCommand.key = val.target.value;
    }

    const EmitSelectType = (val: ModelSelect) => {
        props.modelCommand.type = val;
    }

    return {
        inputKey,
        manualCommandTypeList,
        EmitSelectType
    }
}
