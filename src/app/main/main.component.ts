import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { GithubSearchService } from "../services/github-search.service";
import { IGithubUser } from "../interfaces/igithub-user";
import { MatSnackBar } from "@angular/material";
import { IGithubSearchResults } from "../interfaces/igithub-search-results";
import { IRepository } from "../interfaces/irepository";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  formGroup: FormGroup;
  results: IGithubSearchResults;
  githubUsers: IGithubUser[];
  repositories: IRepository[];
  totalCount: number;

  constructor(
    private _service: GithubSearchService,
    private _matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      UserSearch: new FormControl("", Validators.required)
    });
  }

  searchGithubUsers(query: string, isValid: boolean) {
    if (!isValid) {
      return;
    }
    this._service.getSearchResults(query).subscribe(
      data => {
        console.log(data);
        this.results = data;
        this.githubUsers = this.results.items.slice(0, 10);
        this.totalCount = this.results.total_count;
        this.githubUsers.map(user => {
          this._service.getUserRepos(user.repos_url).subscribe(res => {
            user.repositories = res;
          });
        });
      },
      err => {
        this._matSnackBar.open(`There was a server error: ${err.message}`);
      }
    );
    console.log(this.results);
  }

  get UserSearch() {
    return this.formGroup.get("UserSearch");
  }
}
