import { ButtonAddModelCommandProps } from "./buttonAddModelCommandProps";

export function ButtonAddModelCommand(props:ButtonAddModelCommandProps){
    const clickButtonAddModelCommand = () => {
        props.generatorCommandService.addCommand();
    }
    
    return {
        clickButtonAddModelCommand
    }
}
