<template>
    <button v-on:click="moreCookies($event, 1)">+{{ nb }}</button>
</template>

<script lang="ts">
    import Vue from 'vue';
 
    export default Vue.extend({
        props: {
            'nb': Number
        },
        methods: {
            moreCookies (event, nb) {
                console.log(event, nb);
                
                // if (event) {
                //     event.preventDefault()
                //     }
                // this.count += 1;
            }
        },
    });
</script>