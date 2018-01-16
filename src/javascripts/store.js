const store = {
  debug: true,
  state: {
    hasModal: false
  },
  toggleModalAction () {
    if (this.debug) console.log("toggleModalAction triggered")
    this.state.hasModal = !this.state.hasModal
  },
  setActiveProjectAction (object) {
    if (this.debug) console.log("setActiveProjectAction triggered with", object)
    this.state.activeProject = object
  }
}

export default store
