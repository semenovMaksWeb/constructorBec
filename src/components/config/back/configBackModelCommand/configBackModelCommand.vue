<template>
  <div class="configBackRow">
    <ButtonDeleteModelCommand
        :generator-command-service="generatorCommandService"
        :index="index"
    />
    <ConfigBackBlockInput
        :value="modelCommand.key"
        @input="inputKey"
        :attr-key-label="'command-model-key'"
        :id="'key-' + index" label-text="key"
        :label-required="true"
    />
    <ConfigBackBlockSelect
        :values="modelCommand.type"
        :list="manualCommandTypeList"
        :attr-key-label="'command-model-type'"
        :id="'type-' + index" label-text="type"
        @value="EmitSelectType"
        :label-required="true"
    />
  </div>
</template>

<script lang="ts">

import { InputBase } from "felc-components";
import { PropType } from "vue";
import { ModelCommand } from "../../../../command/model/ModelCommand";

import ConfigBackBlockSelect from "../block/configBackBlockSelect/configBackBlockSelect.vue";
import ConfigBackBlockInput from "../block/configBackBlockInput/configBackBlockInput.vue";
import { configBackModelCommand } from "./configBackModelCommand";
import {ConfigBackModelCommandProps} from "./configBackModelCommandProps";
import ButtonDeleteModelCommand from "../button/buttonDeleteModelCommand/buttonDeleteModelCommand.vue";
import {GeneratorCommandService} from "../../../../command/service/GeneratorCommandService";
export default {
  name: "ConfigBackModelCommand",
  props: {
    generatorCommandService: {
      type: Object as unknown as GeneratorCommandService
    },
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
    index: {
      type: Number
    }
  },
  components: {
    ButtonDeleteModelCommand,
    ConfigBackBlockInput,
    InputBase,
    ConfigBackBlockSelect
  },
  setup(props:ConfigBackModelCommandProps){
    return {
      ...configBackModelCommand(props)
    }
  }
}
</script>

<style lang="scss">
@import "configBackModelCommand";
</style>
