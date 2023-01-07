import { Ref } from "vue";

import { ConfigBackBlockProps } from "../../libs/configBackBlockProps";

export interface ConfigBackBlockInputProps extends ConfigBackBlockProps {
    value: Ref<string>
}
