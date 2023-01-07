import { BlockTagEmit } from "./blockTagsContext";
import { BlockTagsProps } from "./blockTagsProps";

export function blockTags(
        props: BlockTagsProps,
        emit: BlockTagEmit
    ){
    const pushEmit = (val: string) => {
        emit("push", val);
    }

    const deleteEmit = (index: number) => {
        emit("delete", index);
    }

    return {
        pushEmit,
        deleteEmit
    }
}
