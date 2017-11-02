$(function() {
  $(".card").draggable();

  addEvent($('.input_field'));

  $(".plus").click(function(){
    makeCard();
  });

  function addEvent(target) {
    console.log(target);
    target.keydown(function(event) {
      if (event.keyCode == 13) {
        var model=$(this).val();
        console.log(model);
        $(this).parent().css('background-image', 'url(' + model + ')');
        $(this).css('display', 'none');
      }
    });
  }

  function makeCard() {


    // Your existing code unmodified...
    var iDiv = document.createElement('div');
    iDiv.className = 'card';
    document.getElementsByTagName('body')[0].appendChild(iDiv);

    // Now create and append to iDiv
    var innerDiv = document.createElement('input');
    innerDiv.className = 'input_field';
    //console.log(innerDiv);
    //addEvent(innerDiv);

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);
    $(".card").draggable();
    addEvent($('.input_field'));
  };

});
