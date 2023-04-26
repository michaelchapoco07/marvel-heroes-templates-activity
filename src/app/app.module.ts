import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesListsComponent } from './Components/heroes-lists/heroes-lists.component';
// import { ParentComponentComponent } from './Components/parent-component/parent-component.component';
// import { ChildComponentComponent } from './Components/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListsComponent
    // ParentComponentComponent,
    // ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
