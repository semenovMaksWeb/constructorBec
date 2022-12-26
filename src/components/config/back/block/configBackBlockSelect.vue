<template>
    <div class="config-back_block-element">
        <LabelBase :data-key-label="attrKeyLabel" :id="id" :text="labelText" :required="labelRequired" />
        <SelectBase :id="id"/>
    </div>
</template>
<script lang="ts">
import { SelectBase, LabelBase } from "felc-components";
import { configBackBlockProps } from "./configBackBlockProps";
export default {
    name: "ConfigBackBlockSelect",
    props: {
        ...configBackBlockProps
    },
    components: {
        SelectBase,
        LabelBase
    },
}
</script>
<style lang="scss">
@import "configBackBlock.scss";
</style>