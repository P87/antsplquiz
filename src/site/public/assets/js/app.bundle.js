(() => {
  var e = { id: 804, ids: [804] };
  e.modules = {
    755: () => {
      "use strict";
      console.log("testing");
    },
  };
  var s = require("../runtime.bundle.js");
  s.C(e), s((s.s = 755));
})();
