$(document).ready(function() {
  $.ajax({
    url: 'http://157.230.17.132:3029/todos',
    method: 'GET',
    success: function(data) {
      var source = $('#entry-template').html();
      var template = Handlebars.compile(source);
      for (var i = 0; i < data.length; i++) {
        var singleElement = data[i].text;
        var singleId = data[i].id;
        console.log(singleElement, singleId);
        var context = {
          text: singleElement,
          id: singleId
        };
        var html = template(context);
        $('.todo_list').append(html);
      }
    },
    error: function (request, state, errors) {
      alert('Errore' + ' ' + error);
    }
  });
});



// http://157.230.17.132:3029/todos
