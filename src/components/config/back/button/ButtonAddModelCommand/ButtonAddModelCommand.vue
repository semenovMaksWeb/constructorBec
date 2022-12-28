<template>
  <ButtonBase @click="clickButtonAddModelCommand">Добавить</ButtonBase>
</template>

<script lang="ts">
import { ButtonBase } from "felc-components";
import {GeneratorCommandService} from "../../../../../command/service/GeneratorCommandService";
import {ButtonAddModelCommandProps} from "./ButtonAddModelCommandProps";
export default {
  name: "ButtonAddModelCommand",
  components: {
    ButtonBase
  },

  props: {
    generatorCommandService: {
      type: Object as GeneratorCommandService
    }
  },

  setup(props: ButtonAddModelCommandProps){
    const clickButtonAddModelCommand = () => {
      props.generatorCommandService.addCommand();
    }
    return {
      clickButtonAddModelCommand
    }
  }

}
</script>

<style scoped>

</style>
