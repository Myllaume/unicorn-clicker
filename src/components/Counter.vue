<template>
    <div>
        <span>{{ count }}</span>

        <MoreButton
            :nb=cookie_number
            @add-cookie="moreCookies"
            v-for="cookie_number in [1, 2, 3]"
            :key="cookie_number"
        />

        <Baker
            :baker=baker
            v-for="baker in bakers"
            :key="baker.name"
            @add-baker="addBaker"
            :count=count
        />
    </div>
</template>
 
<script lang="ts">
    import Vue from 'vue';
    import MoreButton from './MoreButton.vue';    
    import Baker from './Baker.vue';
    import bakers from '../data/bakers.yml';

    export default Vue.extend({
        props: {
            
        },
        data: () => {
            return {
                count: 0,
                bakers: bakers
            }
        },
        mounted () {
            setInterval(() => {
                this.count++
            }, 1000)
        },
        methods: {
            moreCookies (nb) {
                this.count += nb;
            },
            addBaker (nbPerSecond) {
                this.count += nbPerSecond;
            }
        },
        components: {
            MoreButton,
            Baker
        }
    });
</script>

<style module>
    span {
        font-size: 60px;
        text-align: center;
    }

    .coucou {
        color: red;
    }
</style>