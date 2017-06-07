$(document).ready(function() {
  console.log('JQ');
  customerList();
  customerOrderInfo();
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

var customerOrderInfo = function() {
  $.ajax({
    type: 'GET',
    url: 'get/orderinfo',
    success: function(response) {
      console.log('back from route with:', response);

      for (var i = 0; i < response.length; i++) {
        var orderInfo = '<li id="list-li" data-id="' + response[i].id + '">';
        orderInfo += '<span class="li-text">';
        orderInfo += response[i].first_name + ' ' + response[i].last_name;
        orderInfo += '</span>';
        orderInfo += '<button id="showorders" data-id="' + response[i].id + '" class="btn btn-default btn-xs">Show Orders</button>';
        $('#clientList').append(listofCustomers);

        $('#clientList').append('<li data-id="' + response[i].id + '">' + response[i].first_name + ' ' + response[i].last_name + '</li>');
      }
    } // end success
  }); // end ajax
}; // end customerInfo
