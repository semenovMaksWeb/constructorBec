import { ConfigBackBlockTagEmit } from "./configBackBlockTagsContext";
import { ConfigBackBlockTagsProps } from "./configBackBlockTagsProps";

export function configBackBlockTags(
        props: ConfigBackBlockTagsProps, 
        emit: ConfigBackBlockTagEmit
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
