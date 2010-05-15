function(e) {
  e.preventDefault();
  var form = $(this);
  var doc = {
    created_at : new Date(),
    profile : $$("#profile").profile,
    message : $("[name=message]", form).val()
  };
  var db = $$(this).app.db;

  db.saveDoc(doc, {
    success : function() {
      $("[name=message]", form).val("Uploading file...");
      $("input[name='_rev']", form).val(doc._rev);
      // thank you cmlenz for Futon's original upload code
      form.ajaxSubmit({
        url: db.uri + $.couch.encodeDocId(doc._id),
        success: function(resp) {
          $("[name=message]", form).val("");
        }
      });
    }
  });
  return false;
};
