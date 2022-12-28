import { manualCommandTypeList } from "../../../../command/manual/ManualCommandType";
import { ModelSelect } from "../../../../libs/ModelSelect";

export function configBackModelCommand(props:any){
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
