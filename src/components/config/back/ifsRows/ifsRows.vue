<template>
  <div class="config-back-ifs-rows">
    <template v-if="modelCommandIfs.dataset">
      <BlockTags
        :label-required="true"
        :labelText="'dataset'"
        :attr-key-label="'command-model-ifs-dataset'"
        :values="modelCommandIfs.dataset.key"
        @push="tagPushDataset"
        @delete="tagDeleteDataset"
      />
    </template>

    <template v-if="modelCommandIfs.operator !== undefined">
      <BlockSelect
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
      <BlockTags
        :label-required="true"
        :labelText="'params'"
        :attr-key-label="'command-model-ifs-params'"
        :values="modelCommandIfs.params.key"
        @push="tagPushParams"
        @delete="tagDeleteParams"
      />
    </template>

    <template v-if="modelCommandIfs.value !== undefined">
      <BlockInput
        :id="'ifs-value'"
        :attr-key-label="'command-model-ifs-value'"
        label-text="value"
        :label-required="true"
        :value="modelCommandIfs.value"
        @input="inputSaveValue"
      />
    </template>
    <ButtonDeleteIfs
      :index="index"
      :modelCommand="modelCommand"
    />
  </div>

</template>

<script lang="ts">
import { PropType } from "vue";

import { ModelCommandIfs } from "../../../../command/model/ModelCommandIfs";
import { IfsRowsProps } from "./ifsRowsProps";
import { ifsRows } from "./ifsRows"
import BlockSelect from "../block/blockSelect/blockSelect.vue";
import BlockInput from "../block/blockInput/blockInput.vue";
import BlockTags from "../block/blockTags/blockTags.vue";
import ButtonDeleteIfs from "../button/buttonDeleteIfs/buttonDeleteIfs.vue";
import ButtonAddConfigBackIfs from "../button/buttonAddIfs/buttonAddIfs.vue";
import { modelCommandProps } from "../libs/modelCommandProps";

export default {
  name: "ConfigBackIfsRows",

  components: {
    ButtonAddConfigBackIfs,
    BlockSelect,
    BlockInput,
    BlockTags,
    ButtonDeleteIfs
  },

  props: {
    ...modelCommandProps,
    modelCommandIfs: {
      type: Object as PropType<ModelCommandIfs>
    },
  },

  setup(props: IfsRowsProps){
   return {
    ...ifsRows(props)
   }
  }
}
</script>

<style lang="scss">
@import "ifsRows";
</style>
