<template>
    <div>
        <h3>{{ baker.name }}</h3>
        <p>{{ baker.description }}</p>
        <ul>
            <li>Licornes supplémentaire par secondes : {{ baker.nb_per_second }}</li>
            <li>Coût : {{ baker.cost }}</li>
        </ul>

        <button v-on:click="addBaker(baker.nb_per_second, baker.cost)">Obtenir</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            'baker': Object,
            'count': Number
        },
        methods: {
            addBaker (bakerNbPerSecond, bakerCost) {
                if (this.count >= bakerCost) {
                    this.$emit('add-baker', bakerNbPerSecond, bakerCost);
                }
            }
        }
    })
</script>