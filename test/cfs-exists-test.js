if (typeof define !== 'function') { 
  var define = (require('amdefine'))(module);
}
require(["udel-cfs-widget"], function(widget) {
  buster.testCase("cfs", {
    "is defined as udel-cfs-widget": function() {
      expect(widget).toBeDefined();
    },
    "alerts yay": function() {
      var spy = sinon.spy(widget, "yay");
      widget.yay();
      expect(spy).toBeCalledOnce();
    },
    "will getSomething after you setSomething": function() {
      var a = "YAYNESS";
      widget.setSomething(a);
      expect(widget.getSomething()).toEqual(a);
    }
  });
  buster.testCase("cfs template", {
    "has a #something containing loading": function(done) {
      require(["jquery"], function($) {
        expect($("#something").html()).toEqual("loading");
        done();
      });
    }
  });
});
