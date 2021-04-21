import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {NavigationComponent} from './navigation/navigation.component';

@NgModule({
  declarations: [
    HeaderComponent, NavigationComponent
  ],
  exports: [
    HeaderComponent, NavigationComponent
  ]
})
export class HeaderModule {

}
