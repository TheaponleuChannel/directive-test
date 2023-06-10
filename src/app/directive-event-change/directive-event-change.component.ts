import { Component } from '@angular/core';
import { ElementRef, Directive, HostListener} from '@angular/core';

@Component({
  selector: 'app-directive-event-change',
  templateUrl: './directive-event-change.component.html',
  styleUrls: ['./directive-event-change.component.scss']
})


export class DirectiveEventChangeComponent {

  public el : any
  constructor(el: ElementRef) {
   this.el = el;
    }
    
    @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    this.changeColor(event.key);
    }
    
    changeColor(key: string) {
    let color: string;
    switch (key) {
    case 'a':
    color = 'red';
    break;
    case 'b':
    color = 'blue';
    break;
    case 'c':
    color = 'green';
    break;
    default:
    color = 'black';
    }
    this.el.nativeElement.style.color = color;
    }



  // public event : string = ' you type a';
  // constructor(private el: ElementRef) { }

  
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
  
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }
  
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
  // onAEnter(event : any){
  //   console.log(event);
    
  // }
}
