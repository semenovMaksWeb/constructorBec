import {ModelSelect} from "../../../../../libs/ModelSelect";
import {ConfigBackBlockSelectProps} from "./configBackBlockSelectProps";
import {ConfigBackBlockSelectEmit} from "./configBackBlockSelectContext";

export function configBackBlockSelect(props:ConfigBackBlockSelectProps, emit:ConfigBackBlockSelectEmit){
    const selectEmit = (val:ModelSelect) => {
        emit("value", val);
    }
    return {
        selectEmit
    }
}
