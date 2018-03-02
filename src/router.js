// Window Location
const pathName = window.location.pathname
const pathParams = pathName.split("/")

// Dynamically Load Modules
switch (pathParams[1]) {
  // Home Page
  case "":
    // Import the module
    import("./routes/home.js").then(module => {
      console.log("import -> Home.js")
    })

    console.log("Import 'Home Page' modules")
    break

  // News Page
  case "blog":
    // Import the module
    import("./routes/blog.js").then(module => {
      console.log("import -> blog.js")
    })

    console.log("Import 'Blog Page' modules")
    break

  // Fallback Page
  default:
    console.log("Import 'default' modules")
}

console.log("NOTE: Switch statement expression is: " + pathParams[1])
console.log("NOTE: Router.js file has imported")
console.log("NOTE: window.location.pathname is " + pathName)
