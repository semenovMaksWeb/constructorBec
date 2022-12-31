<template>
  <ButtonBase 
    :title="'Добавить команду'" 
    @click="clickButtonAddModelCommand"
  >
    Добавить
  </ButtonBase>
</template>

<script lang="ts">
import { PropType } from "vue";
import { ButtonBase } from "felc-components";

import { GeneratorCommandService } from "../../../../../command/service/GeneratorCommandService";
import { ButtonAddModelCommandProps } from "./buttonAddModelCommandProps";
import { ButtonAddModelCommand } from "./buttonAddModelCommand";

export default {
  name: "ButtonAddModelCommand",

  components: {
    ButtonBase
  },

  props: {
    generatorCommandService: {
      type: Object as PropType<GeneratorCommandService>
    }
  },

  setup(props: ButtonAddModelCommandProps){
    return {
      ...ButtonAddModelCommand(props)
    }
  }
}
</script>
