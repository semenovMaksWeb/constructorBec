<template>
  <div class="configBackRow">
    <ConfigBackBlockInput :attr-key-label="'command-model-key'" :id="'key-' + index" label-text="key" :label-required="true" />
    <ConfigBackBlockSelect :attr-key-label="'command-model-type'" :id="'type-' + index" label-text="type" :label-required="true" />
    {{ modelCommand.key }}
  </div>
</template>

<script lang="ts">

import { InputBase } from "felc-components";
import { PropType } from "vue";
import { ModelCommand } from "../../../command/model/ModelCommand";

import ConfigBackBlockSelect from "./block/configBackBlockSelect.vue";
import ConfigBackBlockInput from "./block/configBackBlockInput/configBackBlockInput.vue";
export default {
  name: "ConfigBackRow",
  props:{
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
    index: {
      type: Number
    }
  },
  components: {
    ConfigBackBlockInput,
    InputBase,
    ConfigBackBlockSelect
},
}
</script>

<style lang="scss">
</style>
