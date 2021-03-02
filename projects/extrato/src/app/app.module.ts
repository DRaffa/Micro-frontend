import { RouterModule } from '@angular/router';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements'

import { AppComponent } from './app.component';
import { ExtratoListComponent } from './extrato-list/extrato-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtratoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'extrato',
        component: ExtratoListComponent
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  // bootstrap: [AppComponent] Para ele nao dar boostrap sozinho ou seja inicializar
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const elem = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('micro-app-extrato', elem);
  }
}
