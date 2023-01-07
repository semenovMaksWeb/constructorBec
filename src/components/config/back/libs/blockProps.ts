export const blockProps = {
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

export interface BlockProps {
    id: string;
    labelText: string;
    labelRequired: boolean;
    attrKeyLabel: string;
}
