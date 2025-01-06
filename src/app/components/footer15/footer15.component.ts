import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-footer15',
  templateUrl: 'footer15.component.html',
  styleUrls: ['footer15.component.css'],
})
export class Footer15 {
  @ContentChild('copyright')
  copyright: TemplateRef<any>
  @ContentChild('privacyLink')
  privacyLink: TemplateRef<any>
  @ContentChild('termsLink')
  termsLink: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('content2')
  content2: TemplateRef<any>
  @ContentChild('action1')
  action1: TemplateRef<any>
  @ContentChild('text')
  text: TemplateRef<any>
  @ContentChild('cookiesLink')
  cookiesLink: TemplateRef<any>
  constructor() {}
}
