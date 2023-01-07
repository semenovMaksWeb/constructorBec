import { manualCommandRilesTypeList } from "../../../../command/manual/ManualCommandRilesType";

export function validateRulesRows(props: any) {
    const saveError = (event) => {
        props.rules.error = event.target.value;
    }
    return {
        saveError,
        manualCommandRilesTypeList
    }
}