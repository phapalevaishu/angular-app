import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective  implements OnInit {
  
  @Input() color!:string;
//Elementref is used to access hostelement of the directives
  constructor(private el:ElementRef) {}
    ngOnInit():void{
      //this.el.nativeElement.style.backgroundColor='brown';

      this.el.nativeElement.style.backgoundColor='this.color';
      this.el.nativeElement.style.border='1px solid bindCallback';
      this.el.nativeElement.style.width='200px';
      this.el.nativeElement.style.height='130px';
      this.el.nativeElement.style.padding='10px'
      this.el.nativeElement.style.margin='10px'
    }
   

}
