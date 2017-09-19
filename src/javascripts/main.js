import Vue from "vue"
import { HTTP } from "./http-common"
import s from "./store"
import Logo from "./components/Logo"
import "../stylesheets/style.scss"

console.log("Global.js file has imported")

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    privateState: {},
    sharedState: s.state,
  },
  components: {
    "logo": Logo,
  },
  delimiters: ["${", "}"],
  mounted () {

  },
  methods: {

  },
})
