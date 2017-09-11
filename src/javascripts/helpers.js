const helpers = {

  makeVisible(el) {
    el.classList.remove("invisible")
    el.classList.add("visible")
  },

  freezeVp(e) {
    e.preventDefault()
  },

  stopBodyScrolling(bool) {
    if (bool === true) {
      document.body.addEventListener("touchmove", helpers.freezeVp, false)
    } else {
      document.body.removeEventListener("touchmove", helpers.freezeVp, false)
    }
  },

  preventDefault(e) {
    e = e || window.event
    if (e.preventDefault) {
      e.preventDefault()
    }
    e.returnValue = false
  },

  preventDefaultForScrollKeys(e) {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    const scrollKeys = { 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1 }
    if (scrollKeys[e.keyCode]) {
      e.preventDefault()
      return false
    }
  },

  debounce(fn, delay) {
    let timer = null
    return function() {
      let context = this
      let args = arguments
      clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
  },

  /* eslint-disable */
  serialize(form) {
    if (!form || form.nodeName !== "FORM") {
      return;
    }
    var i, j, q = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
      if (form.elements[i].name === "") {
        continue;
      }
      switch (form.elements[i].nodeName) {
        case 'INPUT':
          switch (form.elements[i].type) {
            case 'text':
            case 'number':
            case 'email':
            case 'hidden':
            case 'password':
            case 'button':
            case 'reset':
            case 'submit':
              q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
              break;
            case 'checkbox':
            case 'radio':
              if (form.elements[i].checked) {
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
              }
              break;
            case 'file':
              break;
          }
          break;
        case 'TEXTAREA':
          q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
          break;
        case 'SELECT':
          switch (form.elements[i].type) {
            case 'select-one':
              q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
              break;
            case 'select-multiple':
              for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                if (form.elements[i].options[j].selected) {
                  q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                }
              }
              break;
          }
          break;
        case 'BUTTON':
          switch (form.elements[i].type) {
            case 'reset':
            case 'submit':
            case 'button':
              q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
              break;
          }
          break;
      }
    }
    return q.join("&");
  },
  /* eslint-enable */

}

export default helpers
