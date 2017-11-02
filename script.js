$(function() {
  $(".card").draggable();
  $(".card").resizable();

  addEvent($('.input_field'));
  addDelete($('.x_button'));

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

  function addDelete(target) {
    target.click(function() {
      target.parent().remove();
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

    var x_button = document.createElement('div');
    x_button.className = 'x_button';

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);
    iDiv.appendChild(x_button);
    $(".card").draggable();
    addEvent($('.input_field'));
    addDelete($('.x_button'));
  };
});
