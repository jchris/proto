// generic async script loader
// quick hack version needs jquery, could make it a more general purpose lib I guess
// it'd be fun to make an npm version that just makes a compatible api for node.
requires = function() {
    var c=0, fun, args =[];
    for (var i=0; i < arguments.length; i++) {
        args.push(arguments[i])
    };
    fun = args.pop();
    function loadCommonJS(name, last) {
        $.ajax({url:name, success: function(data) {
            eval(data)
            if (c++ == args.length-1) {
                fun();
            }
        }})
    };
    for (i=0; i < args.length; i++) {
        loadCommonJS(args[i]);
    };
};