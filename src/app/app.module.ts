import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { SearchComponent } from './components/shared/header/search.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { SiComponent } from './components/concepts/si/si.component';
import { PbComponent } from './components/concepts/pb/pb.component';
import { EbComponent } from './components/concepts/eb/eb.component';
import { TwbComponent } from './components/concepts/twb/twb.component';
import { CpbComponent } from './components/concepts/cpb/cpb.component';
import { CebComponent } from './components/concepts/ceb/ceb.component';
import { SdComponent } from './components/concepts/sd/sd.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { NewBannerComponent } from './components/contacts/new-banner/new-banner.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { EllipsisPipe } from './pipes/ellipsis.pipe';


//-----configuring routes
const APP_ROUTES : Routes = [
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'add-contact', component: AddContactComponent, canActivate: [ AuthGuard ] }, //, canActivate: [ AuthGuard ]
  { path: 'about', component: AboutComponent },
  { path:'contact-details/:id', component: ContactDetailsComponent},
  { path: 'new-banner', component: NewBannerComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MaincontentComponent,
    SearchComponent,
    NavComponent,
    ConceptsComponent,
    SiComponent,
    PbComponent,
    EbComponent,
    TwbComponent,
    CpbComponent,
    CebComponent,
    SdComponent,
    ContactsComponent,
    AboutComponent,
    AddContactComponent,
    ContactDetailsComponent,
    NewBannerComponent,
    EllipsisPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES) //REGISTERING ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
