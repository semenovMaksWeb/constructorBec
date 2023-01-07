import { ModelCommandProps } from "../../libs/modelCommandProps";

export function buttonDeleteIfs(props: ModelCommandProps){
    const clickDeleteConfigBackIfs = () => {
        props.modelCommand.deleteIfs(props.index);
    }
    
    return {
        clickDeleteConfigBackIfs
    }
}