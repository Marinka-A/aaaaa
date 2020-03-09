import {Component, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {AService} from '../a.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [{ provide: AService, useValue: { data: 22 }}],
  viewProviders: [{ provide: AService, useValue: { data: 33 }}],
})
export class ChildComponent implements OnInit {

  constructor(public a: AService,
              @SkipSelf() public b: AService,
              @Self() public c:AService,
              @Optional() public d:AService) { }

  ngOnInit(): void {
  }

}
