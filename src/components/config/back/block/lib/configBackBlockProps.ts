import { Ref } from "vue";
export const configBackBlockProps = {
    id: {
        type: String
    },

    labelText: {
        type: String
    },

    labelRequired: {
        type: Boolean,
        default: false
    },

    attrKeyLabel: {
        type: String
    }
}

export interface ConfigBackBlockProps {
    id: Ref<string>;
    labelText: Ref<string>;
    labelRequired: Ref<boolean>;
    attrKeyLabel: Ref<string>;
}
