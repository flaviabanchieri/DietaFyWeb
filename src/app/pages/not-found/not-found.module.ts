
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { NotFound } from './not-found.component'
import { CommonModule } from '@angular/common'
import { ComponentsModule } from 'src/app/components/components.module'
import { RouterModule } from '@angular/router'

const routes = [
  {
    path: '',
    component: NotFound,
  },
]

@NgModule({
  declarations: [NotFound],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [NotFound],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotFoundModule {}
