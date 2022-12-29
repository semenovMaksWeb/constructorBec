<template>
  <div class="wrapper-button_add_config_back_ifs">
    <ConfigBackBlockSelect
        :id="'ifs-type-add'"
        :list="manualCommandIfsTypeList"
        :attr-key-label="'command-model-type'"
        label-text="type-ifs"
        :label-required="true"
        :values="valueType"
        @value="valueTypeSave"
    />
    <ButtonBase
        class="button-add_config_back_ifs"
        :disable="disableButton"
        :title="'Добавить команду'"
        @click="clickButtonAddConfigBackIfs"
    >
      Добавить
    </ButtonBase>
  </div>

</template>

<script lang="ts">
import { ButtonBase } from "felc-components";
import ConfigBackBlockSelect from "../../block/configBackBlockSelect/configBackBlockSelect.vue";
import {buttonAddConfigBackIfs} from "./buttonAddConfigBackIfs";
import {PropType} from "vue";
import {ModelCommand} from "../../../../../command/model/ModelCommand";
import {ButtonAddConfigBackIfsProps} from "./buttonAddConfigBackIfsProps";
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
.wrapper-button_add_config_back_ifs{
  display: flex;
  align-items: center;
}
.button-add_config_back_ifs{
  margin-bottom: var(--wrapper-margin-bottom);
}
</style>
