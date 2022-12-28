import {ConfigBackBlockProps} from "../lib/configBackBlockProps";
import {ModelSelect} from "../../../../../libs/ModelSelect";
import {Ref} from "vue";

export interface ConfigBackBlockSelectProps extends ConfigBackBlockProps {
    values: Ref<ModelSelect>;
    list: Ref<ModelSelect[]>;
}
