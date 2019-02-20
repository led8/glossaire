function documentReady(jQuery){
  function eachLetter(index){
    function click(event){
      event.preventDefault();
      var clickedElement = $(this).text();

      if(clickedElement){
        function eachPanel(){
          var panel = $(this).text().charAt(4);

          if(panel.includes(clickedElement)){
            console.log($(this).offset().top);
            //$(this).offset({top: 637});
            $('.glossary-item').animate({scrollTop:$(this).offset().top}, 'slow');
          }
        }
        $('div.panel').each(eachPanel);
        $('.panel-collapse.collapse.in.glossary-content').removeClass('in');
        $(`div#collapse${index+1}`).toggleClass('in');
      };
    }
    $(this).on('click', click);
  };
  $('.letters-item a').each(eachLetter);
}
$(document).ready(documentReady);

