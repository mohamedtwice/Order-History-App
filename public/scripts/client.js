$(document).ready(function() {
  console.log('JQ');
  customerList();
}); // end doc ready


var customerList = function() {
  $.ajax({
    type: 'GET',
    url: 'get/customers',
    success: function(response) {
      console.log('back from route with:', response);
      for (var i = 0; i < response.length; i++) {
        var listofCustomers = '<li id="list-li" data-id="' + response[i].id + '">';
        listofCustomers += '<span class="li-text">';
        listofCustomers += response[i].first_name + ' ' + response[i].last_name;
        listofCustomers += '</span>';
        listofCustomers += '<button id="showorders" data-id="' + response[i].id + '" class="btn btn-default btn-xs">Show Orders</button>';
        $('#clientList').append(listofCustomers);

        // $('#clientList').append('<li data-id="' + response[i].id + '">' + response[i].first_name + ' ' + response[i].last_name + '</li>');
      }
    } // end success
  }); // end ajax
}; // end customerList
