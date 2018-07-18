import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { MyMaterialModule } from "./material/my-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { GithubSearchService } from "./services/github-search.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchResultsComponent } from "./search-results/search-results.component";

@NgModule({
  declarations: [AppComponent, MainComponent, SearchResultsComponent],
  imports: [
    AppRoutingModule,
    MyMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [GithubSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
