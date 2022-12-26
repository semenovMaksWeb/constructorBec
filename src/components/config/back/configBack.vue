<template>
  <div class="configBack">
    <ConfigBackRow
      v-for="(elem, index) of generatorCommandService.command"
      :key="index"
      :model-command="elem"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
import { ImagesBase } from "felc-components";
import { GeneratorCommandService } from "../../../command/service/GeneratorCommandService";
import ConfigBackRow from "./configBackModelComand.vue";
export default {
  name: "ConfigBack",
  components: {
    ImagesBase,
    ConfigBackRow
},
setup(){
    const generatorCommandService = new GeneratorCommandService();
    generatorCommandService.addCommand();
    return {
      generatorCommandService
    };
  }

}
</script>

<style lang="scss">

</style>
