import { PropType } from "vue";
import { ModelCommand } from "../../../../command/model/ModelCommand";

export interface ModelCommandProps {
    modelCommand: ModelCommand;
    index: number
}

export const modelCommandProps = {
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
    
    index: {
      type: Number
    }
}