<template>
  <div class="wrapper-button_add_config_back_ifs">
    <BlockSelect
        :id="'ifs-type-add'"
        :list="manualCommandIfsTypeList"
        :attr-key-label="'command-model-type-ifs'"
        label-text="ifs"
        :label-required="true"
        :values="valueType"
        @value="valueTypeSave"
    />
    <ButtonBase
        class="button-add_config_back_ifs"
        :disable="disableButton"
        :title="'Добавить условие'"
        @click="clickButtonAddIfs"
    >
      Добавить
    </ButtonBase>
  </div>

</template>

<script lang="ts">
import {PropType} from "vue";
import { ButtonBase } from "felc-components";

import BlockSelect from "../../block/blockSelect/blockSelect.vue";
import { buttonAddIfs } from "./buttonAddIfs";
import { ModelCommand } from "../../../../../command/model/ModelCommand";
import { ButtonAddIfsProps } from "./buttonAddIfsProps";

export default {
  name: "ButtonAddIfs",

  components: {
    BlockSelect,
    ButtonBase
  },

  props: {
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
  },

  setup(props:ButtonAddIfsProps){
    return {
      ...buttonAddIfs(props)
    }
  }
}
</script>

<style lang="scss">
@import "buttonAddIfs";
</style>
