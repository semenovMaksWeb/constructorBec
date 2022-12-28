<template>
    <div class="config-back_block-element">
        <LabelBase :data-key-label="attrKeyLabel" :id="id" :text="labelText" :required="labelRequired" />
        <InputBase :value="value" v-bind="$attrs" :id="id"/>
    </div>
</template>
<script lang="ts">
import { InputBase, LabelBase } from "felc-components";
import { configBackBlockProps } from "../lib/configBackBlockProps";
export default {
    name: "ConfigBackBlockInput",
    props: {
        ...configBackBlockProps,
      value: {
          type: String
      }
    },
    components: {
        InputBase,
        LabelBase
    },
}
</script>
<style lang="scss">
@import "../lib/configBackBlock";
@import "configBackBlockInput";
</style>
