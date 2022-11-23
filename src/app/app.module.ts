import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ROOT_REDUCERS } from './state/app.state';
import { HitEffects } from './state/effects/hits.effects';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {  HitImageDatailsComponent } from './components/hit-image-details/hit-image-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from './components/error-component/error-component.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'details/:id',component:HitImageDatailsComponent},
  {path:'**',component:ErrorComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavbarComponent,
    SearchContainerComponent,
    HitImageDatailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([HitEffects]),
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
