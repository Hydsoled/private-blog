import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MainRoutingModule} from '../main-routing.module';

@NgModule({
  declarations: [
    HeaderComponent, NavigationComponent
  ],
  imports: [
    MainRoutingModule
  ],
  exports: [
    HeaderComponent, NavigationComponent
  ]
})
export class HeaderModule {}
