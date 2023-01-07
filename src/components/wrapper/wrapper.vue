<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    export default {
        name: "Wrapper",
    }
</script>
<style lang="scss">
    .wrapper{
        padding: var(--wrapper-padding);
        border: var(--wrapper-border);
        margin-bottom: var(--wrapper-margin-bottom);
    }
</style>