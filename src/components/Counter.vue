<template>
    <div>
        <span>{{ count }}</span>

        <MoreButton v-bind:nb=1 v-on:click="moreCookies($event, 1)" />
    </div>
</template>
 
<script lang="ts">
    import Vue from 'vue';
    import MoreButton from './MoreButton.vue';    

    export default Vue.extend({
        props: {
            // 'count': String
        },
        data: () => {
            return {
                count: 0
            }
        },
        mounted () {
            setInterval(() => {
                this.count++
            }, 1000)
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
        components: {
            MoreButton
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