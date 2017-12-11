import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {ImageService} from '../services/image/image.service';

declare var $: any;

@Directive({
  selector: '[draggable]'
})

export class DraggableDirective implements AfterViewInit {

  // this will emit an event for the parent
  @Output() newPosition = new EventEmitter();

  constructor(private el: ElementRef, private imageService: ImageService) {}

  ngAfterViewInit() {
    let id = this.el.nativeElement.id;
    this.imageService.findImageById(id).subscribe((image) => {
      $('#' + this.el.nativeElement.id).css("top", image.top);
      $('#' + this.el.nativeElement.id).css("left", image.left);
      this.makeDraggable(this);
    });
  }

  makeDraggable(ref) {
    $(this.el.nativeElement).draggable({
      containment: "parent",
      stop: function(event, ui) {
        let id = ui.helper.attr('id');
        ref.newPosition.emit({pos: ui.position, id: id});
      }
    });
  }
}
