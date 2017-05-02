$(document).ready(function() {
  let formStatus = false;
  let urlStatus = false;
  let $topiclist = $(".topiclist");
  let $favorite = $(".favoritetoggle");
  let $all = $(".alltoggle");
  
  //Form add item
  var $form = $("form").on("submit", function(e) {
    if (!$("#url").val()|| !$("#title").val()) {
      e.preventDefault();
      alert("Please fill in empty fields");
    } else {
      e.preventDefault();
      var $li = $("<li>");
      var $icon = $("<span>").addClass("glyphicon glyphicon-star-empty");
      var $topictext = $("<a>").addClass("topic-text")
                               .attr("href", $("#url").val())
                               .attr("target","blank")
                               .text($("#title").val());
      var $link = $("<span>").text("(" + $("#url").val() + ")")
                             .addClass("class-filter");
      $li.append($icon).append($topictext).append($link);
      $topiclist.append($li);
      $form.trigger("reset");
      }
  });

  //Form slider
  var $lisubmit = $(".formtoggle").on("click", function() {
    if (!formStatus) {
      formStatus = true;
      $(".submitform").slideToggle(300);
    } else {
      formStatus = false;
      $(".submitform").slideToggle(300);
    }
  });

  //Toggle Icon code
  $topiclist.on("click", ".glyphicon", function(event) {
    $(event.target).toggleClass("glyphicon-star-empty");
    $(event.target).toggleClass("glyphicon-star");
  })

  //Toggle favorite
  $favorite.on("click", function() {
      $(".glyphicon").each(function(index,value) {
        if (value.className === "glyphicon glyphicon-star-empty") {
          $(value).parent().addClass("hide-all");
        }
      });
      $favorite.addClass("hide-all");
      $all.removeClass("hide-all");
  });
  
  //Toggle URL
  $topiclist.on("click",".class-filter",function(event){
    if (!urlStatus) {
      $(".class-filter").each(function(index,value){
        if(!($(value).text() === $(event.target).text())) {
          $(value).parent().addClass("hide-all");
        }
      });
      $favorite.addClass("hide-all");
      $all.removeClass("hide-all");
      urlStatus = true;
    }
  })

  //Toggle all
  $all.on("click", function() {
    $(".glyphicon").each(function(index,value) {
      $(value).parent().removeClass("hide-all");
    });
    $favorite.removeClass("hide-all");
    $all.addClass("hide-all");
    urlStatus = false;
  });
});