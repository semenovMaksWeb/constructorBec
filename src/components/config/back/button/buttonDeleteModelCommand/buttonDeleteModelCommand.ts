import { ButtonDeleteModelCommandProps } from "./buttonDeleteModelCommandProps";

export function buttonDeleteModelCommand(props:ButtonDeleteModelCommandProps) {
    const clickButtonDeleteModelCommand = () => {
        props.generatorCommandService.deleteCommand(props.index);
    }
    
    return {
        clickButtonDeleteModelCommand
    }
}
