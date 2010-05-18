function(newDoc, oldDoc, userCtx) {
  var v = require("vendor/couchapp/lib/validate").init(newDoc, oldDoc, userCtx);
  if (v.isAdmin()) {
    return;
  }
  v.authorOnly();
};