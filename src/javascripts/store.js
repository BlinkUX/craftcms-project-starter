const store = {
  debug: true,
  state: {
    hasModal: false,
    activeProject: null,
  },
  toggleModalAction () {
    if (this.debug) console.log("toggleModalAction triggered")
    this.state.hasModal = !this.state.hasModal
    // Clear active project
    if (this.state.hasModal) this.state.activeProject = null
  },
  setActiveProjectAction (object) {
    if (this.debug) console.log("setActiveProjectAction triggered with", object)
    this.state.activeProject = object
  },
}

export default store
