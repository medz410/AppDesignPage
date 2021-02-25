import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { TopPanelComponent } from './top-panel/top-panel.component';




import { AmexioWidgetModule } from 'amexio-ng-extensions';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AmexioEnterpriseModule } from 'amexio-ng-extensions';
import { CommonModule } from "@angular/common";
import { AmexioPaneModule } from 'amexio-ng-extensions';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {LifeCycleBaseComponent} from './lifecycle.base.component';
import {CommonDataService} from './services/common.data.service'
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LeftPanelComponent,
    TopPanelComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AmexioEnterpriseModule,
    AmexioPaneModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClient,
    BrowserAnimationsModule,
    AmexioWidgetModule
  ],
  providers: [CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
