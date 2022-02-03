<template>
    <div>
        <h1>{{ title }}</h1>

        <div v-for="baker in bakers"></div>

        <Counter />
    </div>
</template>
 
<script lang="ts">
    import Vue from 'vue';
    import Counter from './Counter.vue'
    import bakers from '../data/bakers.yml';

    // console.log(bakers);
 
    export default Vue.extend({
        props: {
            'title': String
        },
        components: {
            Counter,
            bakers
        }
    });
</script>

<style module>
    h1 {
        text-align: center;
    }
</style>