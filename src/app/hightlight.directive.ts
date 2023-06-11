import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('a') onMouseLeave(){

  }
  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'a') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    }
    if(event.key === 's' || event.key === 'S'){
      this.renderer.setStyle(this.el.nativeElement, 'background-color', ' pink');
    } else if (event.key === 'b') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    }
  }
  

}
