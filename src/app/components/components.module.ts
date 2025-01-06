import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Footer15 } from './footer15/footer15.component'
import { Card } from './card/card.component'

@NgModule({
  declarations: [Footer15, Card],
  imports: [CommonModule, RouterModule],
  exports: [Footer15, Card],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
