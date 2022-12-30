import {ConfigBackBlockProps} from "../lib/configBackBlockProps";
import {ModelSelect} from "../../../../../libs/ModelSelect";;

export interface ConfigBackBlockSelectProps extends ConfigBackBlockProps {
    values: ModelSelect;
    list: ModelSelect[];
}
