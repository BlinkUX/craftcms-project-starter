webpackJsonp([4],{

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Window Location
var pathName = window.location.pathname;
var pathParams = pathName.split("/");

// Dynamically Load Modules
switch (pathParams[1]) {
  // Home Page
  case "":
    // Import the module
    __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 48)).then(function (module) {
      console.log("System.import -> Home.js");
    });

    console.log("Import 'Home Page' modules");
    break;

  // News Page
  case "news":
    // Import the module
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 49)).then(function (module) {
      console.log("System.import -> news.js");
    });

    console.log("Import 'News Page' modules");
    break;

  // Fallback Page
  default:
    console.log("Import 'default' modules");
}

console.log("NOTE: Switch statement expression is: " + pathParams[1]);
console.log("NOTE: Router.js file has imported");
console.log("NOTE: window.location.pathname is " + pathName);

/***/ })

},[44]);
//# sourceMappingURL=router.bundle.js.map