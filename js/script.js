var groceries = [];
var items = ["item1", "item2", "item3", "item4", "item5"];

$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    items.forEach(function(item) {
      groceries.push($("input#" + item).val());
    });

    groceries.map(function(grocery) {
      $("#output").append("<li>" + grocery + "</li>");
    });

    event.preventDefault();
  });
});







// var grocList = [];
//
// $(document).ready(function() {
//   $("form#blanks").submit(function(event) {
//     var items = [($("#item1").val()), "item2", "item3", "item4", "item5"];
//     items.forEach(function(item) {
//       grocList.push($("#item" + item).val());
//     })
//
//     var capItems = grocList.map(function(groc) {
//       return groc.toUpperCase();
//     });
//
//     capItems.forEach(function(capItem) {
//       $("#output").text("<li>" + capItem + "</li>")
//     });
//
//     $("#output").show();
//     event.preventDefault();
//   });
// });
