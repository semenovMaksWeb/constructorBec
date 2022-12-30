<template>
  <div class="wrapper_back-ifs">
    <ButtonAddConfigBackIfs :modelCommand="modelCommand"/>
    <ConfigBackIfsRows
        v-for="(modelCommandIfs, index) in modelCommand.ifs"
        :key="index"
        :modelCommandIfs="modelCommandIfs"
    />
  </div>

</template>

<script lang="ts">

import ButtonAddConfigBackIfs from "../button/buttonAddConfigBackIfs/buttonAddConfigBackIfs.vue";
import {PropType} from "vue";
import {ModelCommand} from "../../../../command/model/ModelCommand";
import ConfigBackIfsRows from "./configBackIfsRows/configBackIfsRows.vue";
export default {
  name: "ConfigBackIfs",
  components: {ConfigBackIfsRows, ButtonAddConfigBackIfs},
  props: {
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
  }
}
</script>

<style lang="scss">
.wrapper_back-ifs {
  padding: var(--wrapper-padding);
  border: var(--wrapper-border);
}
</style>