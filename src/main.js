import Vue from "vue"
import s from "./store"
import Logo from "./components/Logo"
import "./style.css"

console.log("Global.js file has imported")

/* eslint-disable no-new */
new Vue({
  el: "#app",
  delimiters: ["${", "}"],
  components: {
    Logo
  },
  data: {
    privateState: {},
    sharedState: s.state
  },
  mounted() {},
  methods: {}
})
/* eslint-enable */
