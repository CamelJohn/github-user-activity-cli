import type { IGitHubEvent } from './types.js';

export const events_map: Record<string, (event: IGitHubEvent) => void> = {
  PushEvent: (event: IGitHubEvent) =>
    console.info(`- Pushed ${event.payload.commits.length} commit(s) to ${event.repo.name}`),
  IssuesEvent: (event: IGitHubEvent) =>
    `- ${event.payload.action.replace(/./, (c: string) => c.toUpperCase())} an issue in ${
      event.repo.name
    }`,
  WatchEvent: (event: IGitHubEvent) => console.info(`- Starred ${event.repo.name}`),
  ForkEvent: (event: IGitHubEvent) => console.info(`- Forked ${event.repo.name}`),
  CreateEvent: (event: IGitHubEvent) =>
    console.info(`- Created ${event.payload.ref_type} in ${event.repo.name}`),
  PullRequestEvent: (event: IGitHubEvent) =>
    console.info(
      `- ${event.payload.action.replace(/./, (c: string) => c.toUpperCase())} pull request in ${
        event.repo.name
      }`
    ),

  IssueCommentEvent: (event: IGitHubEvent) =>
    console.info(`- Commented on issue #${event.payload.issue?.number} in ${event.repo.name}`),
};
