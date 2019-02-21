function documentReady(jQuery){
  function eachLetter(index){
    function click(event){
      var clickedElement = $(this).text();
      if(clickedElement){
        $('.panel-collapse.collapse.in.glossary-content').removeClass('in');
        $(`div#collapse${index+1}`).toggleClass('in');
      };
    }
    $(this).on('click', click);
  };
  $('.letters-item a').each(eachLetter);
}
$(document).ready(documentReady);
