import Vue from "vue";
import HelloComponent from "./components/hello";
import helloVue from "./components/world.vue"

let v = new Vue({
    el: "#app",
    template: `
        <div>
            <div>Hello {{name}}</div>
            Name: <input v-model="name" type="text">
            <hello-component :name="name" :initialEnthusiasm="5"> </hello-component>
            <h1>this is a hello world page</h1>
            <hello-vue :name="name" :initialEnthusiasm ="3"></hello-vue>
        </div>
    `,
    data: {
        name: 'World'
    },
    components:{
        HelloComponent,
        helloVue
    }
})