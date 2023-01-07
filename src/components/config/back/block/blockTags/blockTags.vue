<template>
    <div class="config-back_block-element">
        <LabelBase
          :data-key-label="attrKeyLabel"
          :id="id" :text="labelText"
          :required="labelRequired"
        />
        <TagBase
          :values="values"
          @push="pushEmit"
          @delete="deleteEmit"
        />
    </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { TagBase, LabelBase } from "felc-components";

import { blockProps } from "../../libs/blockProps";
import { BlockTagsProps } from "./blockTagsProps";
import { BlockTagContext } from "./blockTagsContext";
import { blockTags } from "./blockTags";

export default {
    name: "configBackBlockTags",

    props: {
        ...blockProps,
        values: {
          type: Object as PropType<String[]>
        }
    },

    components: {
      TagBase,
      LabelBase
    },

    setup(props:BlockTagsProps, { emit }: BlockTagContext){
      return {
        ...blockTags(props, emit)
      }
    }
}
</script>

<style lang="scss">
@import "../../libs/configBackBlock";
</style>
