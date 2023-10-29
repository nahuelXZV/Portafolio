import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { DescriptionComponent } from './components/description/description.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceCardComponent } from './components/cards/experience-card/experience-card.component';
import { ProjectCardComponent } from './components/cards/project-card/project-card.component';
import { LinkedinComponent } from './components/icons/linkedin/linkedin.component';
import { GitHubComponent } from './components/icons/git-hub/git-hub.component';
import { GmailComponent } from './components/icons/gmail/gmail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ExperienceComponent,
    ProjectComponent,
    ContactComponent,
    DescriptionComponent,
    FooterComponent,
    ExperienceCardComponent,
    ProjectCardComponent,
    GitHubComponent,
    LinkedinComponent,
    GmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
