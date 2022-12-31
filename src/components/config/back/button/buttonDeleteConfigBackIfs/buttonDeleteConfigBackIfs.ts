import { ModelCommandProps } from "../../libs/modelCommandProps";

export function buttonDeleteConfigBackIfs(props: ModelCommandProps){
    const clickDeleteConfigBackIfs = () => {
        props.modelCommand.deleteIfs(props.index);
    }
    
    return {
        clickDeleteConfigBackIfs
    }
}