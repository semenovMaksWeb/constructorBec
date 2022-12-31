<template>
  <ButtonBase 
    class="button_delete-config-back-ifs" 
    :title="'Удалить условие'" 
    @click="clickDeleteConfigBackIfs"
  >
    Удалить
  </ButtonBase>
</template>
  
<script lang="ts">
import { ButtonBase } from "felc-components";
import { ModelCommandProps, modelCommandProps } from "../../libs/modelCommandProps";
import { buttonDeleteConfigBackIfs } from "./buttonDeleteConfigBackIfs";

export default {
  name: "ButtonDeleteConfigBackIfs",
  
  components: {
    ButtonBase
  },

  props: {
    ...modelCommandProps,
  },

  setup(props: ModelCommandProps) {
    return {
      ...buttonDeleteConfigBackIfs(props)
    }
  }
}
</script>
  
<style lang="scss">
@import "buttonDeleteConfigBackIfs.scss"
</style> 