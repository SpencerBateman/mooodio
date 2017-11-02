'use strict';

(function() {

    var socket = io();
    var canvas = $(document.body);

    var drawing = false;

    canvas.addEventListener('mousedown', onMouseDown, false);
    canvas.addEventListener('mouseup', onMouseUp, false);
    canvas.addEventListener('mouseout', onMouseUp, false);
    canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false);

    socket.on('move', onMovingEvent);

    function emitPos(left, top, emit){

        if (!emit) { return; }

        socket.emit('move', {
            left: left,
            top: top
        });
    }

    function onMouseDown(e){
        drawing = true;
    }

    function onMouseUp(e){
        if (!drawing) { return; }
        drawing = false;
        let cardPos = $(".card").position;
        emitPos(cardPos.left, cardPos.top, true);
    }

    function onMouseMove(e){
        if (!drawing) { return; }
        let cardPos = $(".card").position;
        emitPos(cardPos.left, cardPos.top, true);
    }

    // limit the number of events per second
    function throttle(callback, delay) {
        var previousCall = new Date().getTime();
        return function() {
            var time = new Date().getTime();

            if ((time - previousCall) >= delay) {
                previousCall = time;
                callback.apply(null, arguments);
            }
        };
    }

    function onMovingEvent(data){
        $(".card").css({
            'top': data.top,
            'left': data.left
        });
    }
})();