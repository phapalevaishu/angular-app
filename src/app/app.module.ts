import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
//import { PipesComponent } from './pipes/pipes.component';
import { EventExComponent } from './event-ex/event-ex.component';
import { NgmodelExComponent } from './ngmodel-ex/ngmodel-ex.component';
import { FormsModule } from '@angular/forms';
import { CreateproductComponent } from './createproduct/createproduct.component';
//import { CustomDirectivetwoDirective } from './custom-directivetwo.directive';
//import { LowercaseDirective } from './customdirective/lowercase.directive';
// import { ArithmaticoperationComponent } from './arithmaticoperation/arithmaticoperation.component';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { CustomdirectiveDirective } from './appdirectives/customdirective.directive';
import { DirectivesComponent } from './directives/directives.component';
import { ScrollToUpDirective } from './appdirectives/scroll-to-up.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OtpComponent } from './otp/otp.component';
import { CalAgeComponent } from './cal-age/cal-age.component';
import { DropdownExComponent } from './dropdown-ex/dropdown-ex.component';
import { TemplatrDrivenFormComponent } from './templatr-driven-form/templatr-driven-form.component';
import { StructueDirectivesComponent } from './structue-directives/structue-directives.component';
import { TemplateComponent } from './template/template.component';
import { TemplateUsingNgmodelComponent } from './template-using-ngmodel/template-using-ngmodel.component';
import { FlightComponent } from './flight/flight.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomestaysComponent } from './homestays/homestays.component';
import { HolidaysPackagesComponent } from './holidays-packages/holidays-packages.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"flight",component:FlightComponent},
  {path:"hotels",component:HotelsComponent},
  {path:"homestays",component:HomestaysComponent},
  {path:"holidays-packages",component:HolidaysPackagesComponent},
  {path:"",redirectTo:"/flight",pathMatch:"full"}, // default route
  //{path:"**",component:PageNotFoundComponent} // wild card route
   {path:"",component:FlightComponent},  // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  
  declarations: [

    AppComponent,
    LoginComponent,
    DataBindingComponent,
   // PipesComponent,
    EventExComponent,
    NgmodelExComponent,
    CreateproductComponent,
    CustomdirectiveDirective,
    DirectivesComponent,
    ScrollToUpDirective,
    OtpComponent,
    CalAgeComponent,
    DropdownExComponent,
    TemplatrDrivenFormComponent,
    StructueDirectivesComponent,
    TemplateComponent,
    TemplateUsingNgmodelComponent,
    FlightComponent,
    HotelsComponent,
    HomestaysComponent,
    HolidaysPackagesComponent,
    //CustomDirectivetwoDirective,
    //LowercaseDirective,
   // ArithmaticoperationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
