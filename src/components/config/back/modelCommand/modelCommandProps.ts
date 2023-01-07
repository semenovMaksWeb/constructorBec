import { GeneratorCommandService } from "../../../../command/service/GeneratorCommandService";
import { ModelCommandProps } from "../libs/modelCommandProps";

export interface ConfigBackModelCommandProps extends ModelCommandProps {
    generatorCommandService: GeneratorCommandService,
}
