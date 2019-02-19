function documentReady(jQuery){
  $('.letters-item a').each(function(index){
    $(this).on('click', function(event){
      event.preventDefault();
      var clickedElement = $(this).text();
      if(clickedElement){
        console.log($("h4.panel-title").text === clickedElement);
        // $("h4.panel-title").each(function(){
          //console.log($("h4.panel-title").text());
        // });
        $(`div#collapse${index+1}`).toggleClass('in');
      };
    });
  });
}
$(document).ready(documentReady);


