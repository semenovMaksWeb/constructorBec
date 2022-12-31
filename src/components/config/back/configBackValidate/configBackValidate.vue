<template>
    <ConfigBackValidateRows 
        v-for="(validate, index) of modelCommand.validate"
        :key="index"
        :model-command="modelCommand"
        :validate="validate"
    />
    {{ modelCommand.validate }}
</template>

<script lang="ts">
import { PropType } from 'vue';

import { ModelCommand } from '../../../../command/model/ModelCommand';
import ConfigBackValidateRows from '../configBackValidateRows/configBackValidateRows.vue';

export default {
    name: "ConfigBackValidate",

    props: {
        modelCommand: {
            type: Object as PropType<ModelCommand>
        }
    },
    
    components: { ConfigBackValidateRows }
}
</script>

<style lang="scss">
    
</style>