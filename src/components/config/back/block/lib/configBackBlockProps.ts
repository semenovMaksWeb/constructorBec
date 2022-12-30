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
    id: string;
    labelText: string;
    labelRequired: boolean;
    attrKeyLabel: string;
}
