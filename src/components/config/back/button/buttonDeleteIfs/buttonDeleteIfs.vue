<template>
  <ButtonBase 
    class="button_delete-config-back-ifs" 
    :title="'Удалить условие'" 
    @click="clickDeleteIfs"
  >
    Удалить
  </ButtonBase>
</template>
  
<script lang="ts">
import { ButtonBase } from "felc-components";
import { ModelCommandProps, modelCommandProps } from "../../libs/modelCommandProps";
import { buttonDeleteIfs } from "./buttonDeleteIfs";

export default {
  name: "ButtonDeleteIfs",
  
  components: {
    ButtonBase
  },

  props: {
    ...modelCommandProps,
  },

  setup(props: ModelCommandProps) {
    return {
      ...buttonDeleteIfs(props)
    }
  }
}
</script>
  
<style lang="scss">
@import "buttonDeleteIfs"
</style> 