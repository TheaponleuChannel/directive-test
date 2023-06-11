import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveEventChangeComponent } from './directive-event-change/directive-event-change.component';
import { HightlightDirective } from './direvtives/hightlight.directive';
import { HoverChangeDirective } from './direvtives/hover-change.directive';
import { AttributeDirective } from './direvtives/attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveEventChangeComponent,
    HightlightDirective,
    HoverChangeDirective,
    AttributeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
