import { BlockProps } from "../../libs/blockProps";
import { ModelSelect } from "../../../../../libs/ModelSelect";

export interface BlockSelectProps extends BlockProps {
    values: ModelSelect;
    list: ModelSelect[];
}
