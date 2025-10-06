interface IGithubActor {
  id: number;
  login: string;
  display_login?: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

interface IGitHubRepo {
  id: number;
  name: string;
  url: string;
}

interface IGitHubOrg {
  id: number;
  loging: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface IGitHubEvent {
  id: string;
  type: string;
  actor: IGithubActor;
  repo: IGitHubRepo;
  payload: any; // will be narrowed per event type below
  public: boolean;
  created_at: string; // ISO string
  org: IGitHubOrg;
}
