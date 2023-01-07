import { ModelSelect } from "../../../../../libs/ModelSelect";
import { BlockSelectProps } from "./blockSelectProps";
import { BlockSelectEmit } from "./blockSelectContext";

export function blockSelect(props: BlockSelectProps, emit: BlockSelectEmit) {
    const selectEmit = (val: ModelSelect) => {
        emit("value", val);
    }

    return {
        selectEmit
    }
}
