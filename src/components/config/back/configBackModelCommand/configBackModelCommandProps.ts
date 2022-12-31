import { ModelCommand } from "../../../../command/model/ModelCommand";
import { GeneratorCommandService } from "../../../../command/service/GeneratorCommandService";

export interface ConfigBackModelCommandProps {
    modelCommand: ModelCommand,
    generatorCommandService: GeneratorCommandService,
    index: number
}
