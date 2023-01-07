import { computed } from "vue";
import { ManualCommandType, manualCommandTypeList } from "../../../../command/manual/ManualCommandType";
import { ModelSelect } from "../../../../libs/ModelSelect";
import { ConfigBackModelCommandProps } from "./ModelCommandProps";

export function modelCommand(props: ConfigBackModelCommandProps){
    const inputKey = (val) => {
        props.modelCommand.key = val.target.value;
    }

    const EmitSelectType = (val: ModelSelect) => {
        props.modelCommand.type = val;
    }

    const visibleValidate = computed(() => { 
        return props.modelCommand.type.value == ManualCommandType.validate;
    })

    return {
        inputKey,
        EmitSelectType,
        manualCommandTypeList,
        visibleValidate
    }
}
