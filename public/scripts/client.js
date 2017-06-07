$(document).ready(function() {
  console.log('JQ');
  customerList();
  // customerOrderInfo();
  $('#clientList').on('click', '#showorders', showOrdersButton);
}); // end doc ready


var customerList = function() {
  $.ajax({
    type: 'GET',
    url: 'get/customers',
    success: function(response) {
      console.log('back from route with:', response);
      for (var i = 0; i < response.length; i++) {
        var listofCustomers = '<li id="list-li">';
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

function showOrdersButton() {
  console.log('show orders click', $(this).data('id'));
  var id = $(this).data('id');

  $.ajax({
    type: 'GET',
    url: '/get/' + id,
    success: function(response) {
      console.log('back from route customers', response);
      for (var i = 0; i < response.length; i++) {
        var orderInfo = '<tr data-id="' + response[i].id + '">';
        orderInfo += '<td data-id="' + response[i].id + '>' + response[i].first_name + ' ' + response[i].last_name + '</td>';
        orderInfo += '<td data-id="' + response[i].id + '>' + response[i].order_id + '</td>';
        orderInfo += '<td data-id="' + response[i].id + '>' + response[i].unit_price + '</td>';
        orderInfo += '<td data-id="' + response[i].id + '>' + response[i].quantity + '</td>';
        orderInfo += '<td data-id="' + response[i].id + '>' + response[i].street + '</td>';
        orderInfo += '<td data-id="' + response[i].id + '>' + response[i].city + ', ' + response[i].state + ' ' + response[i].zip + '</td>';
        orderInfo += '</tr>';
        $('#myTable tr:last').after(orderInfo);
      } //success
    } //end success
  }); //end ajax
}



// var customerOrderInfo = function() {
//   $.ajax({
//     type: 'GET',
//     url: 'get/orderinfo',
//     success: function(response) {
//       console.log('back from route with:', response);
//
//       for (var i = 0; i < response.length; i++) {
//         var orderInfo = '<tr data-id="' + response[i].id + '">';
//         orderInfo += '<td data-id="' + response[i].id + '>' + response[i].first_name + ' ' + response[i].last_name + '</td>';
//         orderInfo += '<td data-id="' + response[i].id + '>' + response[i].order_id + '</td>';
//         orderInfo += '<td data-id="' + response[i].id + '>' + response[i].unit_price + '</td>';
//         orderInfo += '<td data-id="' + response[i].id + '>' + response[i].quantity + '</td>';
//         orderInfo += '<td data-id="' + response[i].id + '>' + response[i].street + '</td>';
//         orderInfo += '<td data-id="' + response[i].id + '>' + response[i].city + ', ' + response[i].state + ' ' + response[i].zip + '</td>';
//         orderInfo += '</tr>';
//         $('#myTable tr:last').after(orderInfo);
//       }
//     } // end success
//   }); // end ajax
// }; // end customerInfo
