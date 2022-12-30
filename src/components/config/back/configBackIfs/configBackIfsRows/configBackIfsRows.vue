<template>
  <div>
    <template v-if="modelCommandIfs.dataset">
    </template>
    <template v-if="modelCommandIfs.operator !== undefined">
      <ConfigBackBlockSelect
        :id="'ifs-operator'"
        :list="manualCommandIfsOperatorList"
        :attr-key-label="'command-model-ifs-operator'"
        label-text="operator"
        :label-required="true"
        :values="modelCommandIfs.operator"
        @value="selectSaveOperator"
    />
    </template>
    <template v-if="modelCommandIfs.params">
      {{ modelCommandIfs.params }}
    </template>
    <template v-if="modelCommandIfs.value !== undefined">
      <ConfigBackBlockInput
        :id="'ifs-value'"
        :attr-key-label="'command-model-ifs-value'"
        label-text="value"
        :label-required="true"
        :value="modelCommandIfs.value"
        @input="inputSaveValue"
      />
    </template>
  </div>
</template>

<script lang="ts">

import ButtonAddConfigBackIfs from "../../button/buttonAddConfigBackIfs/buttonAddConfigBackIfs.vue";
import {PropType} from "vue";
import {ModelCommand} from "../../../../../command/model/ModelCommand";
import {ModelCommandIfs} from "../../../../../command/model/ModelCommandIfs";
import { ConfigBackIfsRowsProps } from "./configBackIfsRowsProps";
import { configBackIfsRows } from "./configBackIfsRows"
import ConfigBackBlockSelect from "../../block/configBackBlockSelect/configBackBlockSelect.vue";
import ConfigBackBlockInput from "../../block/configBackBlockInput/configBackBlockInput.vue";
export default {
  name: "ConfigBackIfsRows",
  components: { ButtonAddConfigBackIfs, ConfigBackBlockSelect, ConfigBackBlockInput },
  props: {
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
    modelCommandIfs: {
      type: Object as PropType<ModelCommandIfs>
    }
  },
  setup(props: ConfigBackIfsRowsProps){
   return {
    ...configBackIfsRows(props)
   } 
  }
}
</script>

<style lang="scss">
.wrapper_back-ifs {
  padding: var(--wrapper-padding);
  border: var(--wrapper-border);
}
</style>
