import { IGithubUser } from "./igithub-user";

export interface IGithubSearchResults {
  items: IGithubUser[];
  total_count: number;
}
