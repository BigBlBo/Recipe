import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') toggleOpen(elRef: ElementRef) {
        /*
        if (this.elRef.nativeElement.classList.contains('open')) {
            this.renderer.removeClass(this.elRef.nativeElement, 'open');
        } else {
            this.renderer.addClass(this.elRef.nativeElement, 'open');
        }
        */
       this.isOpen = !this.isOpen;
    }
}
