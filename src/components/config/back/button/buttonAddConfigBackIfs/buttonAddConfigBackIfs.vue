<template>
  <div class="wrapper-button_add_config_back_ifs">
    <ConfigBackBlockSelect
        :id="'ifs-type-add'"
        :list="manualCommandIfsTypeList"
        :attr-key-label="'command-model-type-ifs'"
        label-text="type-ifs"
        :label-required="true"
        :values="valueType"
        @value="valueTypeSave"
    />
    <ButtonBase
        class="button-add_config_back_ifs"
        :disable="disableButton"
        :title="'Добавить условие'"
        @click="clickButtonAddConfigBackIfs"
    >
      Добавить
    </ButtonBase>
  </div>

</template>

<script lang="ts">
import {PropType} from "vue";
import { ButtonBase } from "felc-components";

import ConfigBackBlockSelect from "../../block/configBackBlockSelect/configBackBlockSelect.vue";
import { buttonAddConfigBackIfs } from "./buttonAddConfigBackIfs";
import { ModelCommand } from "../../../../../command/model/ModelCommand";
import { ButtonAddConfigBackIfsProps } from "./buttonAddConfigBackIfsProps";

export default {
  name: "ButtonAddConfigBackIfs",

  components: {
    ConfigBackBlockSelect,
    ButtonBase
  },

  props: {
    modelCommand: {
      type: Object as PropType<ModelCommand>
    },
  },

  setup(props:ButtonAddConfigBackIfsProps){
    return {
      ...buttonAddConfigBackIfs(props)
    }
  }
}
</script>

<style lang="scss">
@import "buttonAddConfigBackIfs.scss";
</style>
