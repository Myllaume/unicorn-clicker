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
                count: 5000,
                bakers: bakers,
                muliplicator: 1,
                interval: setInterval(function(){})
            }
        },
        mounted () {
            this.interval = setInterval(() => {
                this.count += this.muliplicator;
            }, 1000)
        },
        methods: {
            moreCookies (nb) {
                this.count += nb;
            },
            addBaker (nbPerSecond, cost) {
                this.muliplicator += nbPerSecond;

                clearInterval(this.interval)
                this.interval = setInterval(() => {
                    this.count += this.muliplicator;
                }, 1000)

                this.count -= cost;
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