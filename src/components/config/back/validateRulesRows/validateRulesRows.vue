<template>
  <div class="validateRulesRows">
    <BlockInput
        attr-key-label="validate-rules-rows-error"
        :label-required="true"
        label-text="error"
        @input="saveError"
    />
    <BlockSelect
        :label-required="true"
        label-text="type"
        :id="'rules-type-' + index"
        attr-key-label="validate-rules-rows-type"
        :list="manualCommandRilesTypeList"
        :values="rules.type"
    />
  </div>
</template>

<script lang="ts">
import BlockInput from "../block/blockInput/blockInput.vue";
import {PropType} from "vue";
import {ModelCommandValidateRiles} from "../../../../command/model/validate/ModelCommandValidateRiles";
import {validateRulesRows} from "./validateRulesRows";
import BlockSelect from "../block/blockSelect/blockSelect.vue";

export default {
  name: "validateRulesRows",
  components: {BlockSelect, BlockInput },
  props: {
    rules: {
      type: Object as PropType<ModelCommandValidateRiles>
    },
    index: {
      type: Number
    }
  },
  setup(props){
    return {
      ...validateRulesRows(props)
    }
  }
}
</script>

<style lang="scss">

</style>