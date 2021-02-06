import { Directive, HostListener, Input, ElementRef, Renderer2, Host } from '@angular/core';

@Directive({
  selector: '[appData]'
})
export class DataDirective {

  @Input()
  date: string | undefined;
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
   }

  //when mouse enter show date
  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    this.paragraph.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  //when mouse leave hide date
  @HostListener('mouseleave')
  mouseleave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }

}
