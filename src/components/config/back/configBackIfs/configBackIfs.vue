<template>
  <div class="wrapper_back-ifs">
    <ButtonAddConfigBackIfs :modelCommand="modelCommand"/>
  </div>

</template>

<script lang="ts">

import ButtonAddConfigBackIfs from "../button/buttonAddConfigBackIfs/buttonAddConfigBackIfs.vue";
import {PropType} from "vue";
import {ModelCommand} from "../../../../command/model/ModelCommand";
export default {
  name: "ConfigBackIfs",
  components: {ButtonAddConfigBackIfs},
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
