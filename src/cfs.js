if (typeof define !== 'function') { 
  var define = (require('amdefine'))(module);
}
define("udel-cfs-widget", 
    ["jquery"], 
    function($) {
  var a = {};
  a.yay = function() {
    alert("yay!");
  };
  a.setSomething = function(something) {
    $("#something").html(something);
  };
  a.getSomething = function() {
    return $("#something").html();
  };
  return a;
});
