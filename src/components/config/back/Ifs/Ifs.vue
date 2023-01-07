<template>
  <Wrapper>
    <ButtonAddIfs
      :modelCommand="modelCommand"
    />
    <IfsRows
        v-for="(modelCommandIfs, index) in modelCommand.ifs"
        :key="index"
        :modelCommand="modelCommand"
        :modelCommandIfs="modelCommandIfs"
        :index="index"
    />
  </Wrapper>
</template>

<script lang="ts">
import { PropType } from "vue";

import ButtonAddIfs from "../button/buttonAddIfs/buttonAddIfs.vue";
import { ModelCommand } from "../../../../command/model/ModelCommand";
import IfsRows from "../ifsRows/ifsRows.vue";
import Wrapper from "../../../wrapper/wrapper.vue";

export default {
  name: "ConfigBackIfs",

  components: { IfsRows, ButtonAddIfs, Wrapper },

  props: {
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
  }
}
</script>

<style lang="scss">
@import "ifs.scss";
</style>
