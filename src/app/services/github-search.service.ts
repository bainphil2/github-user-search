import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { IGithubUser } from "../interfaces/igithub-user";
import { IGithubSearchResults } from "../interfaces/igithub-search-results";
import { IRepository } from "../interfaces/irepository";

@Injectable()
export class GithubSearchService {
  results: IGithubSearchResults;

  constructor(private _http: HttpClient) {}

  getSearchResults(query: string): Observable<IGithubSearchResults> {
    const options = { params: new HttpParams().set("q", query) };
    const result = this._http.get(
      `${environment.githubSearchUrl}`,
      options
    ) as Observable<IGithubSearchResults>;
    return result;
  }

  getUserRepos(url: string): Observable<IRepository[]> {
    const result = this._http.get(url) as Observable<IRepository[]>;
    return result;
  }
}
