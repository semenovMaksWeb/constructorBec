<template>
        <ConfigBackBlockInput
            :value="modelCommand.key"
            @input="inputKey"
            :attr-key-label="'command-model-validate-key'"
            :id="'command-model-validate-key'"
            label-text="key"
            :label-required="true"
        />
</template>

<script lang="ts">
import { PropType } from 'vue';

import { ModelCommand } from '../../../../command/model/ModelCommand';
import { ModelCommandValidate } from '../../../../command/model/validate/ModelCommandValidate';
import ConfigBackBlockInput from '../block/configBackBlockInput/configBackBlockInput.vue';
import { configBackValidateRows } from './configBackValidateRows';

export default {
    name: "ConfigBackValidateRows",

    components: { ConfigBackBlockInput },

    props: {
        modelCommand: {
            type: Object as PropType<ModelCommand>
        },
        validate: {
            type: Object as PropType<ModelCommandValidate>
        }
    },

    setup(props){
        return {
            ...configBackValidateRows(props)
        }
    }
}
</script>