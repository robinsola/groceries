var groceries = [];
var items = ["item1", "item2", "item3", "item4", "item5"];

$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    items.forEach(function(item) {
      groceries.push($("input#" + item).val());
    });

    var grocCaps = groceries.map(function(grocCap) {
      return grocCap.toUpperCase();
    });

    var grocFinals = grocCaps.sort();

    grocFinals.map(function(grocFinal) {
      $("#output").append("<li>" + grocFinal + "</li>");
    });

    $("form#blanks").hide();

    event.preventDefault();
  });
});
