<template>
    <Wrapper>
        <validate-rules-rows
            v-for="(rules, index) in validate.riles"
            :key="index"
            :validate="validate"
            :rules="rules"
            :index="index"
        />
    </Wrapper>
</template>
<script lang="ts">
import Wrapper from '../../../wrapper/wrapper.vue';
import { PropType } from "vue";
import { ModelCommandValidate } from "../../../../command/model/validate/ModelCommandValidate";
import ValidateRulesRows from "../validateRulesRows/validateRulesRows.vue";

export default {
    components: {ValidateRulesRows, Wrapper },
    props:{
      validate: {
        type: Object as PropType<ModelCommandValidate>
      }
    }
}
</script>
<style lang="scss">
    
</style>