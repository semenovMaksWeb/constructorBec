<template>
  <div>
    {{ modelCommandIfs.dataset }}
  </div>
</template>

<script lang="ts">

import ButtonAddConfigBackIfs from "../button/buttonAddConfigBackIfs/buttonAddConfigBackIfs.vue";
import {PropType} from "vue";
import {ModelCommand} from "../../../../command/model/ModelCommand";
import {ModelCommandIfs} from "../../../../command/model/ModelCommandIfs";
export default {
  name: "ConfigBackIfsRows",
  components: {ButtonAddConfigBackIfs},
  props: {
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
    modelCommandIfs: {
      type: Object as PropType<ModelCommandIfs>
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
