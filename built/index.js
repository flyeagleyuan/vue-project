import Vue from "vue";
import HelloComponent from "./components/hello";
import helloVue from "./components/world.vue";
var v = new Vue({
    el: "#app",
    template: "\n        <div>\n            <div>Hello {{name}}</div>\n            Name: <input v-model=\"name\" type=\"text\">\n            <hello-component :name=\"name\" :initialEnthusiasm=\"5\"> </hello-component>\n            <h1>this is a hello world page</h1>\n            <hello-vue :name=\"name\" :initialEnthusiasm =\"3\"></hello-vue>\n        </div>\n    ",
    data: {
        name: 'World'
    },
    components: {
        HelloComponent: HelloComponent,
        helloVue: helloVue
    }
});
//# sourceMappingURL=index.js.map