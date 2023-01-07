<template>
  {{ generatorCommandService }}
  <div class="configBack">
    <ButtonAddModelCommand 
      :generator-command-service="generatorCommandService" 
    />
    <ModelCommand
        v-for="(elem, index) of generatorCommandService.command"
        :key="index"
        :generator-command-service="generatorCommandService"
        :model-command="elem"
        :index="index"
    />
  </div>
</template>

<script lang="ts">
import  { ref } from "vue";

import { GeneratorCommandService } from "../../../../command/service/GeneratorCommandService";
import ModelCommand from "../modelCommand/modelCommand.vue";
import ButtonAddModelCommand from "../button/buttonAddModelCommand/buttonAddModelCommand.vue";

export default {
  name: "ConfigBack",

  components: {
    ButtonAddModelCommand,
    ModelCommand
},

setup() {
    const generatorCommandService = ref(new GeneratorCommandService());
    return {
      generatorCommandService
    };
  }
}
</script>

<style lang="scss">

</style>
