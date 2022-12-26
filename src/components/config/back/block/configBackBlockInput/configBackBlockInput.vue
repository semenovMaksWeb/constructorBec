<template>
    <div class="config-back_block-element">
        <LabelBase :data-key-label="attrKeyLabel" :id="id" :text="labelText" :required="labelRequired" />
        <InputBase :id="id"/>
    </div>
</template>
<script lang="ts">
import { InputBase, LabelBase } from "felc-components";
import { configBackBlockProps } from "../configBackBlockProps";
export default {
    name: "ConfigBackBlockInput",
    props: {
        ...configBackBlockProps
    },
    components: {
        InputBase,
        LabelBase
    },
}
</script>
<style lang="scss">
@import "src/components/config/back/block/configBackBlock";
@import "configBackBlockInput";
</style>
