import { Component, OnInit, Input } from "@angular/core";
import { IGithubUser } from "../interfaces/igithub-user";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  @Input() results: IGithubUser[];

  constructor() {}

  ngOnInit() {}
}
