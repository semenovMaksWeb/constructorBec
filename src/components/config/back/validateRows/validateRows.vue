<template>
  <ConfigBackBlockInput
      :value="modelCommand.key"
      @input="inputKey"
      :attr-key-label="'command-model-validate-key'"
      :id="'command-model-validate-key'"
      label-text="key"
      :label-required="true"
  />
  <ValidateRules :validate="validate" />
</template>

<script lang="ts">
import { PropType } from 'vue';

import { ModelCommand } from '../../../../command/model/ModelCommand';
import { ModelCommandValidate } from '../../../../command/model/validate/ModelCommandValidate';
import ConfigBackBlockInput from '../block/blockInput/blockInput.vue';
import { validateRows } from './validateRows';
import ValidateRules from "../validateRules/validateRules.vue";

export default {
    name: "ValidateRows",

    components: { ValidateRules, ConfigBackBlockInput },

    props: {
        modelCommand: {
            type: Object as PropType<ModelCommand>
        },
        validate: {
            type: Object as PropType<ModelCommandValidate>
        }
    },
    setup(props){
        return {
            ...validateRows(props)
        }
    }
}
</script>
