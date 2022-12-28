<template>
  <div class="configBack">
    {{ generatorCommandService.command }}
    <ConfigBackModelCommand
      v-for="(elem, index) of generatorCommandService.command"
      :key="index"
      :model-command="elem"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
import  { ref } from "vue";
import { GeneratorCommandService } from "../../../command/service/GeneratorCommandService";
import ConfigBackModelCommand from "./configBackModelCommand/configBackModelCommand.vue";
export default {
  name: "ConfigBack",
  components: {
    ConfigBackModelCommand
},
setup(){
    const generatorCommandService = ref(new GeneratorCommandService());
    generatorCommandService.value.addCommand();
    return {
      generatorCommandService
    };
  }

}
</script>

<style lang="scss">

</style>
