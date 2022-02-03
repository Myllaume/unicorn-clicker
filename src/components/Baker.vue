<template>
    <div>
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
        <ul>
            <li>Licornes par secondes : {{ nb_per_second }}</li>
            <li>Licornes par secondes : {{ cost }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            'name': String,
            'description': String,
            'nb_per_second': Number,
            'cost': Number
        }
    })
</script>