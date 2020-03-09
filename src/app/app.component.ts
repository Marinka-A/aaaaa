import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, Optional, Self, SkipSelf
} from '@angular/core';
import {AService} from './a.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: AService, useValue: { data: 2 }}],
  viewProviders: [
    {provide: AService, useValue: {data:3}}
  ]
})

export class AppComponent implements OnInit,OnDestroy,DoCheck, OnChanges,AfterContentChecked,AfterViewChecked,AfterContentInit,AfterViewInit {
  title = 'untitled';

  constructor(public a: AService,
              @SkipSelf() public b:AService,
              @Self() public c:AService,
              @Optional() public d:AService) {
  console.log('constructor')
}
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnChanges(): void {
    console.log('ngOnChanges')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
}
