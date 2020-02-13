$(document).ready(function() {
  printAllList();
  $(document).on('click', '#send_btn', function() {
    var inputVal = $('#input_add').val();
    console.log(inputVal);
  });
});

// FUNZIONE PER LA STAMPA DI TUTTA LA LISTA
function printAllList() {
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
}


function addElement(value) {

}
// http://157.230.17.132:3029/todos
