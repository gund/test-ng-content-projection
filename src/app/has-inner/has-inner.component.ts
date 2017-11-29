import { Component, Optional } from '@angular/core';

import { InnerComponent } from '../inner/inner.component';

@Component({
  selector: 'app-has-inner',
  templateUrl: './has-inner.component.html',
  styleUrls: ['./has-inner.component.css']
})
export class HasInnerComponent {

  get hasInnerComp() {
    return !!this.innerComp;
  }

  constructor(
    @Optional() public innerComp: InnerComponent,
  ) { }

}
