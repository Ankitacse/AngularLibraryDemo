import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ak-magic-string',
  template: `
   <input type="text" (keydown.enter)="markText($event.target.value)">
   <div #content [hidden]="true">
   <ng-content></ng-content>
   </div>
   <div [innerHTML]="controlledContent"></div>
  `,
  styles: [`.mark{background-color:yellow}`],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringComponent implements OnInit {
  @ViewChild('content', null) content: ElementRef;
  originalContent: string;
  controlledContent: string;
  constructor() { }

  ngOnInit() {
    this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
  }
  markText(value: any) {
    this.controlledContent = this.originalContent;
    this.controlledContent = this.originalContent.replace(
      new RegExp(value, 'g'),
      `<span class="mark">${value}</span>`)
  }
}
