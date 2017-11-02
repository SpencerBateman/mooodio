$(function() {
  $(".card").draggable();

  $('.input_field').keydown(function(event) {
    if (event.keyCode == 13) {
      var model=$(this).val();
      $(this).parent().css('background-image', 'url(' + model + ')');
      $(this).css('display', 'none');
    }
  });

  $(".plus").click(function(){
    makeCard();
  });

  function makeCard() {


    // Your existing code unmodified...
    var iDiv = document.createElement('div');
    iDiv.className = 'card';
    document.getElementsByTagName('body')[0].appendChild(iDiv);

    // Now create and append to iDiv
    var innerDiv = document.createElement('input');
    innerDiv.className = 'input_field';

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);
    $(".card").draggable();
  };

});
