<template>
    <Wrapper>
        <ValidateRows 
        v-for="(validate, index) of modelCommand.validate"
        :key="index"
        :model-command="modelCommand"
        :validate="validate"
    />
    </Wrapper>
    {{ modelCommand.validate }}
</template>

<script lang="ts">
import { PropType } from 'vue';

import { ModelCommand } from '../../../../command/model/ModelCommand';
import Wrapper from '../../../wrapper/wrapper.vue';
import ValidateRows from '../validateRows/validateRows.vue';

export default {
    name: "ConfigBackValidate",

    props: {
        modelCommand: {
            type: Object as PropType<ModelCommand>
        }
    },
    
    components: { ValidateRows, Wrapper }
}
</script>

<style lang="scss">
    
</style>