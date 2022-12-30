import { ConfigBackIfsRowsProps } from "./configBackIfsRowsProps";
import { manualCommandIfsOperatorList } from "../../../../../command/manual/ManualCommandIfsOperator"
import { ModelSelect } from "../../../../../libs/ModelSelect";

export function configBackIfsRows(props: ConfigBackIfsRowsProps) {
    const selectSaveOperator = (val: ModelSelect) => { 
        props.modelCommandIfs.operator = val;
    }

    const inputSaveValue = (event) => {       
        props.modelCommandIfs.value = event.target.value;
    }

    return {
        manualCommandIfsOperatorList,
        selectSaveOperator,
        inputSaveValue
    }
}