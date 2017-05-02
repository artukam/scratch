$(function() {

  var $form = $("form");
  var $todo = $("#todo");
  var $list = $("ul");
  
  $list.on('click', '.glyphicon-remove', function(e) {
    $(e.target).parent().remove();
  })

  $form.on('submit', function(e) {

    e.preventDefault();
    
    var todoText = $todo.val();
    var $deleteIcon = $("<span>", {
                        class: "glyphicon glyphicon-remove pull-right"
                      });
    var $newLi = $("<li>", {
                   class: 'panel panel-default',
                   text: todoText
                 })
                 .append($deleteIcon);

    $list.append($newLi);
    $todo.val('');

  });

});