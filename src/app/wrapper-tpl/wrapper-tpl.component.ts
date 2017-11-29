import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-wrapper-tpl',
  templateUrl: './wrapper-tpl.component.html',
  styleUrls: ['./wrapper-tpl.component.css']
})
export class WrapperTplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
