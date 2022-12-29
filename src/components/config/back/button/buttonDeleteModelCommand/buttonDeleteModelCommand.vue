<template>
  <ButtonBase :title="'Удалить команду'" @click="clickButtonDeleteModelCommand">Удалить</ButtonBase>
</template>

<script lang="ts">
import { ButtonBase } from "felc-components";
import {ButtonDeleteModelCommandProps} from "./buttonDeleteModelCommandProps";
import {GeneratorCommandService} from "../../../../../command/service/GeneratorCommandService";
import {buttonDeleteModelCommand} from "./buttonDeleteModelCommand";
export default {
  name: "ButtonDeleteModelCommand",
  components:{
    ButtonBase
  },
  props:{
    generatorCommandService: {
      type: Object as unknown as GeneratorCommandService
    },
    index: {
      type: Number
    }
  },
  setup(props: ButtonDeleteModelCommandProps){
    return {
      ...buttonDeleteModelCommand(props)
    }
  }
}
</script>

<style scoped>

</style>
