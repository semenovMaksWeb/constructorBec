import { ModelCommandProps } from "../../libs/modelCommandProps";

export function buttonDeleteIfs(props: ModelCommandProps){
    const clickDeleteIfs = () => {
        props.modelCommand.deleteIfs(props.index);
    }
    
    return {
        clickDeleteIfs
    }
}