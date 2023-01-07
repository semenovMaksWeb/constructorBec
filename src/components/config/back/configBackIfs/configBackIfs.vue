<template>
  <div class="wrapper_back-ifs">
    <ButtonAddConfigBackIfs
      :modelCommand="modelCommand"
    />
    <ConfigBackIfsRows
        v-for="(modelCommandIfs, index) in modelCommand.ifs"
        :key="index"
        :modelCommand="modelCommand"
        :modelCommandIfs="modelCommandIfs"
        :index="index"
    />
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

import ButtonAddConfigBackIfs from "../button/buttonAddConfigBackIfs/buttonAddConfigBackIfs.vue";
import { ModelCommand } from "../../../../command/model/ModelCommand";
import ConfigBackIfsRows from "../configBackIfsRows/configBackIfsRows.vue";

export default {
  name: "ConfigBackIfs",

  components: { ConfigBackIfsRows, ButtonAddConfigBackIfs },

  props: {
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
  }
}
</script>

<style lang="scss">
@import "configBackIfs.scss";
</style>
