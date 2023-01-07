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

import { configBackBlockProps } from "../../libs/configBackBlockProps";
import { ConfigBackBlockTagsProps } from "./configBackBlockTagsProps";
import { ConfigBackBlockTagContext } from "./configBackBlockTagsContext";
import { configBackBlockTags } from "./configBackBlockTags";

export default {
    name: "configBackBlockTags",

    props: {
        ...configBackBlockProps,
        values: {
          type: Object as PropType<String[]>
        }
    },

    components: {
      TagBase,
      LabelBase
    },

    setup(props:ConfigBackBlockTagsProps, { emit }: ConfigBackBlockTagContext){
      return {
        ...configBackBlockTags(props, emit)
      }
    }
}
</script>

<style lang="scss">
@import "../../libs/configBackBlock";
</style>
