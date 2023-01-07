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

import { blockProps } from "../../libs/blockProps";
import { ModelSelect } from "../../../../../libs/ModelSelect";
import { BlockSelectProps } from "./blockSelectProps";
import { BlockSelectContext } from "./blockSelectContext";
import { blockSelect } from "./blockSelect";

export default {
    name: "BlockSelect",

    props: {
        ...blockProps,
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

    setup(props: BlockSelectProps, { emit }: BlockSelectContext){
      return {
        ...blockSelect(props, emit)
      }
    }
}
</script>

<style lang="scss">
@import "../../libs/block";
</style>
