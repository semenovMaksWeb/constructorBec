<template>
  <Wrapper>
    <ButtonDeleteModelCommand
        :generator-command-service="generatorCommandService"
        :index="index"
    />
    <BlockInput
        :value="modelCommand.key"
        @input="inputKey"
        :attr-key-label="'command-model-key'"
        :id="'key-' + index" label-text="key"
        :label-required="true"
    />
    <BlockSelect
        :values="modelCommand.type"
        :list="manualCommandTypeList"
        :attr-key-label="'command-model-type'"
        :id="'type-' + index" label-text="type"
        @value="EmitSelectType"
        :label-required="true"
    />
    <Ifs :modelCommand="modelCommand" />
    <Validate
      :modelCommand="modelCommand"
      v-if="visibleValidate"
    />
  </Wrapper>
</template>

<script lang="ts">
import { PropType } from "vue";

import BlockSelect from "../block/blockSelect/blockSelect.vue";
import BlockInput from "../block/blockInput/blockInput.vue";
import { modelCommand } from "./ModelCommand";
import { ConfigBackModelCommandProps } from "./ModelCommandProps";
import ButtonDeleteModelCommand from "../button/buttonDeleteModelCommand/buttonDeleteModelCommand.vue";
import { GeneratorCommandService } from "../../../../command/service/GeneratorCommandService";
import Ifs from "../ifs/ifs.vue";
import { modelCommandProps } from "../libs/modelCommandProps";
import Validate from "../validate/validate.vue";
import Wrapper from "../../../wrapper/wrapper.vue";

export default {
  name: "ModelCommand",

  props: {
    generatorCommandService: {
      type: Object as PropType<GeneratorCommandService>,

    },
    ...modelCommandProps
  },

  components: {
    Ifs,
    ButtonDeleteModelCommand,
    BlockInput,
    BlockSelect,
    Validate,
    Wrapper
},

  setup(props:ConfigBackModelCommandProps) {
    return {
      ...modelCommand(props)
    }
  }
}
</script>
