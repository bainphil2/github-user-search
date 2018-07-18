import { IRepository } from "./irepository";

export interface IGithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  score: number;
  repositories: IRepository[];
}
