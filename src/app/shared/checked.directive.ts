import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})

export class CheckedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    let li = this.el.nativeElement;
    this.renderer.setStyle(li, 'list-style-image', 'url(https://cdn.bitdegree.org/learn/list-style-image-marker-1.png?426d93cd)');
    this.renderer.setStyle(li, 'background', '#30cc18');
  }
}
