<template>
    <button v-on:click="moreCookies($event, nb)">+{{ nb }}</button>
</template>

<script lang="ts">
    import Vue from 'vue';
 
    export default Vue.extend({
        props: {
            'nb': Number
        },
        methods: {
            moreCookies (event, nb) {
                this.$emit('add-cookie', nb)
            }
        }
    });
</script>