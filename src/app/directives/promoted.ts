import {Directive, ElementRef, Renderer, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[promoted-product]'
})
export class PromotedProductDirective implements OnInit {
  @Input('promoted-product') promoted: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.promoted) {
      this.el.nativeElement.classList.add('list-group-item-success');
    }
  }
}
