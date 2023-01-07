<template>
    <div class="config-back_block-element">
        <LabelBase
            :data-key-label="attrKeyLabel"
            :id="id" :text="labelText"
            :required="labelRequired"
        />
        <InputBase
            :value="value"
            v-bind="$attrs"
            :id="id"
        />
    </div>
</template>

<script lang="ts">
import { InputBase, LabelBase } from "felc-components";

import { blockProps } from "../../libs/blockProps";

export default {
    name: "BlockInput",

    props: {
        ...blockProps,
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
@import "../../libs/block";
</style>
