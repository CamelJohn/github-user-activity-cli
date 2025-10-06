# GitHub User Activity CLI

[URL](https://github.com/CamelJohn/github-user-activity-cli)

A simple **TypeScript CLI tool** to fetch and display a GitHub user’s recent public activity in a **human-readable format**.

---

## Features

- Fetches a user’s **public events** from GitHub.
- Supports common event types:
  - Pushes, Pull Requests, Issues, Issue Comments, Stars, Forks, and Repositories/Branches/Tags creation.
- Falls back gracefully for unknown event types.
- Minimal dependencies, written in **TypeScript**.

---

## Installation

```bash
# Clone the repository
git clone https://github.com/CamelJohn/github-user-activity-cli.git

cd github-user-activity-cli

# Install dependencies
npm install

# Build the project
npm run build

# Link CLI globally
npm link
```

## Usage

```bash
github-activity <username>
```

Example:

```bash
github-activity octocat
```

Output:

```bash
Output:
- Pushed 3 commit(s) to octocat/Hello-World
- Opened pull request in octocat/Hello-World
- Starred octocat/Spoon-Knife
- Created branch in octocat/Hello-World
- Commented on issue #42 in octocat/Hello-World
```

## Development

Start the CLI without building using `tsx`:

```bash
npm start -- <username>
```

Build:

```bash
npm run build
```

## Project Structure

```pgsql
src/
├─ index.ts          # Main CLI logic
├─ events-map.ts     # Mapping from GitHub event types to description functions
└─ types.ts          # TypeScript interfaces for GitHub API events
```

## GitHub Event Handling

The CLI handles the following event types:

- `PushEvent`
- `PullRequestEvent`
- `IssuesEvent`
- `IssueCommentEvent`
- `WatchEvent` (starring a repository)
- `ForkEvent`
- `CreateEvent` (repository, branch, tag creation)

Other event types are displayed in a simple fallback format:

```php-template
<EventType> in <repository>
```

## TypeScript Interfaces

`IGitHubEvent` interface:

```ts
interface IGitHubEvent {
  id: string;
  type: string;
  actor: IGithubActor;
  repo: IGitHubRepo;
  payload: any;
  public: boolean;
  created_at: string;
  org?: IGitHubOrg;
}

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
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}
```
