
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { Home } from './home.component'
import { CommonModule } from '@angular/common'
import { ComponentsModule } from 'src/app/components/components.module'
import { RouterModule } from '@angular/router'

const routes = [
  {
    path: '',
    component: Home,
  },
]

@NgModule({
  declarations: [Home],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Home],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
