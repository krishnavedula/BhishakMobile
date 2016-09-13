angular.module('BhishakReports.filters', [])

.filter('urlencode', function() {
  return function(input) {
    return window.encodeURIComponent(input);
  }
})

.filter('urlencodeWithoutSlash', function() {
  return function(input) {
    var inp = input.replace(/\//g,"-");
    return window.encodeURIComponent(inp);
  }
});