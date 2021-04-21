import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BodyRoutingModule} from '../body/body-routing.module';

@NgModule({
  declarations: [
    HeaderComponent, NavigationComponent
  ],
  imports: [
    BodyRoutingModule
  ],
  exports: [
    HeaderComponent, NavigationComponent
  ]
})
export class HeaderModule {

}
