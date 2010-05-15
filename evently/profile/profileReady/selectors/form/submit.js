function() {
  var form = this;
  var doc = {
    created_at : new Date(),
    profile : $$("#profile").profile,
    message : $("[name=message]", form).val()
  };
  $$(this).app.db.saveDoc(doc, {
    success : function() {
      $("[name=message]", form).val("");
    },
    ensure_full_commit : false
  });
  return false;
};
