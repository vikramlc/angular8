import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() element: {type: string, name: string, content: string};
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: false}) contentParagraph: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('ngInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    // console.log('Content child - ngInit: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    // console.log('Content child - ngAfterContentInit: ' + this.contentParagraph.nativeElement.textContent);
  }


}
