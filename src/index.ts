import Vue from "vue";
import App from "./components/App.vue";

import './style.css'
 
let v = new Vue({
    el: "#app",
    template: `<App title="Unicorn clicker" />`,
    components: {
        App
    }
});