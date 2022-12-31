<template>
  <div class="config-back-ifs-rows">
    <template v-if="modelCommandIfs.dataset">
      <ConfigBackBlockTags
        :label-required="true"
        :labelText="'dataset'"
        :attr-key-label="'command-model-ifs-dataset'" 
        :values="modelCommandIfs.dataset.key" 
        @push="tagPushDataset" 
        @delete="tagDeleteDataset" 
      />
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
      <ConfigBackBlockTags
        :label-required="true"
        :labelText="'params'"
        :attr-key-label="'command-model-ifs-params'" 
        :values="modelCommandIfs.params.key" 
        @push="tagPushParams" 
        @delete="tagDeleteParams" 
      />
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
    <ButtonDeleteConfigBackIfs :index="index" :modelCommand="modelCommand" />
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
import ConfigBackBlockTags from "../../block/configBackBlockTags/configBackBlockTags.vue";
import ButtonDeleteConfigBackIfs from "../../button/buttonDeleteConfigBackIfs/buttonDeleteConfigBackIfs.vue";
export default {
  name: "ConfigBackIfsRows",
  components: { 
    ButtonAddConfigBackIfs, 
    ConfigBackBlockSelect, 
    ConfigBackBlockInput, 
    ConfigBackBlockTags, 
    ButtonDeleteConfigBackIfs 
  },
  props: {
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
    modelCommandIfs: {
      type: Object as PropType<ModelCommandIfs>
    },
    index: {
      type: Number
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
@import "configBackIfsRows.scss";
</style>
