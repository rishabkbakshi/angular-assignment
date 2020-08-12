import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ 
     selector: '[defColOnEvent]' 
})
export class DefaultColorOnEventDirective {
   constructor(private elRef: ElementRef) { 
   }
   @HostListener('mouseover') onMouseOver() {
     this.changeColor('#ff0000');
   }
   @HostListener('mouseleave') onMouseLeave() {
     this.changeColor('');
   }
   private changeColor(color: string) {
     this.elRef.nativeElement.style.backgroundColor = color;
   }  
} 