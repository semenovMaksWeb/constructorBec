<template>
  <ButtonBase 
    class="button_delete-config-back-ifs" 
    :title="'Удалить условие'" 
    @click=""
  >
    Удалить
  </ButtonBase>
</template>
  
<script lang="ts">
import { ButtonBase } from "felc-components";
import { PropType } from "vue";

import { ModelCommand } from "../../../../../command/model/ModelCommand";

export default {
  name: "ButtonDeleteConfigBackIfs",
  
  components: {
    ButtonBase
  },

  props:{
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
    index: {
      type: Number
    }
  }
}
</script>
  
<style lang="scss">
@import "buttonDeleteConfigBackIfs.scss"
</style> 