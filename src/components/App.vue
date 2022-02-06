<template>
    <div>
        <h1>{{ title }}</h1>

        <section>
            <article v-for="baker in bakers">
                <h3 class="coucou">{{ baker.name }}</h3>
                <p>{{ baker.description }}</p>
                <ul>
                    <li>Coût : {{ baker.cost }}</li>
                    <li>Nombre de licorne par seconde : {{ baker.nb_per_second }}</li>
                </ul>
            </article>
        </section>

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
        data: () => {
            return {
                bakers: bakers
            }
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