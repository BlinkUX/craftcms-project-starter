import Vue from "vue"
import s from "./store"
import Logo from "./components/Logo"
import "../stylesheets/style.scss"

console.log("Global.js file has imported")

/* eslint-disable no-new */
new Vue({
  el: "#app",
  delimiters: ["${", "}"],
  components: {
    "logo": Logo
  },
  data: {
    privateState: {},
    sharedState: s.state
  },
  mounted () {
  },
  methods: {
  }
})
