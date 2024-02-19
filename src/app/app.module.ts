import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule} from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent, 
    NavbarComponent, 
    HomeComponent, 
    AboutComponent, 
    CompaniesComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyA-yjnrHCtzvnQwnfd63u7ULXGHedeCfRY",
  authDomain: "test-17504.firebaseapp.com",
  projectId: "test-17504",
  storageBucket: "test-17504.appspot.com",
  messagingSenderId: "601590223233",
  appId: "1:601590223233:web:343f83a615389fce191880"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

