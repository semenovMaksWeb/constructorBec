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

    const tagPushDataset = (val: string) => {
        props.modelCommandIfs.dataset.addKey(val);
    }

    const tagDeleteDataset = (index: number) => {
        props.modelCommandIfs.dataset.deleteKey(index);
    }

    const tagPushParams = (val: string) => {
        props.modelCommandIfs.params.addKey(val);
    }
    
    const tagDeleteParams = (index: number) => {
        props.modelCommandIfs.params.deleteKey(index);
    }

    return {
        manualCommandIfsOperatorList,
        selectSaveOperator,
        inputSaveValue,
        tagPushDataset,
        tagDeleteDataset,
        tagPushParams,
        tagDeleteParams
    }
}