import {Ref} from "vue";
import {ConfigBackBlockProps} from "../lib/configBackBlockProps";

export interface ConfigBackBlockInputProps extends ConfigBackBlockProps {
    value: Ref<string>
}
