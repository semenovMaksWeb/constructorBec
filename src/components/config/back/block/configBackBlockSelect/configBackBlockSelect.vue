<template>
    <div class="config-back_block-element">
        <LabelBase
          :data-key-label="attrKeyLabel"
          :id="id"
          :text="labelText"
          :required="labelRequired"
        />
        <SelectBase
          :values="values"
          :list="list"
          :id="id"
          @value="selectEmit"
        />
    </div>
</template>

<script lang="ts">
import { SelectBase, LabelBase } from "felc-components";
import { PropType } from "vue";

import { configBackBlockProps } from "../../libs/configBackBlockProps";
import { ModelSelect } from "../../../../../libs/ModelSelect";
import { ConfigBackBlockSelectProps } from "./configBackBlockSelectProps";
import { ConfigBackBlockSelectContext } from "./configBackBlockSelectContext";
import { configBackBlockSelect } from "./configBackBlockSelect";

export default {
    name: "ConfigBackBlockSelect",

    props: {
        ...configBackBlockProps,
        list: {
          type: Object as PropType<ModelSelect[]>
        },
        values: {
          type: Object as PropType<ModelSelect>
        }
    },

    components: {
        SelectBase,
        LabelBase
    },

    setup(props:ConfigBackBlockSelectProps, { emit }: ConfigBackBlockSelectContext){
      return {
        ...configBackBlockSelect(props, emit)
      }
    }
}
</script>

<style lang="scss">
@import "../../libs/configBackBlock";
</style>
