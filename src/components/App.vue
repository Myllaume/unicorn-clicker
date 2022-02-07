<template>
    <div>
        <h1>{{ title }}</h1>

        <Counter />
    </div>
</template>
 
<script lang="ts">
    import Vue from 'vue';
    import Counter from './Counter.vue'

    export default Vue.extend({
        props: {
            'title': String
        },
        components: {
            Counter
        }
    });
</script>

<style>
    h1 {
        text-align: center;
    }
</style>