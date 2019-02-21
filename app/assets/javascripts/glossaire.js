function documentReady(jQuery){
  function eachLetterIndex(index){
    function clickElementIndex(){
      var clickedElementIndex = $(this).text();
      if(clickedElementIndex){
        $('.panel-collapse.collapse.in.glossary-content').removeClass('in');
        $(`div#collapse${index+1}`).toggleClass('in');
      };
    };
    $(this).on('click', clickElementIndex);
  };
  $('.letters-item a').each(eachLetterIndex);
}
$(document).ready(documentReady);
