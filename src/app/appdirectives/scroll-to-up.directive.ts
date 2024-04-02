import { Directive, ElementRef, HostListener } from '@angular/core';
import{faCoffee} from'@fortawesome/free-solid-svg-icons'
@Directive({
  selector: '[appScrollToUp]'
})
export class ScrollToUpDirective {
  icon=faCoffee;//icon is the variable name
  constructor(private el:ElementRef) { }
  

  @HostListener('click')
onClicked(){
  window.scrollTo({top:0,behavior:'smooth'});
}
}
