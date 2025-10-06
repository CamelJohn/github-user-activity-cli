import { events_map } from './events-map.js';
import type { IGitHubEvent } from './types.js';

const [username] = process.argv.slice(2);

async function fetch_get_user_activity(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/events`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-Github-Api-Version': '2022-11-28',
    },
  });

  if (!response.ok) {
    return console.error(`Something went wrong: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function get_gh_user_activity(username: string) {
  const events: IGitHubEvent[] = await fetch_get_user_activity(username);

  console.info('Output:');
  events.forEach((event) => {
    const handler = events_map[event.type];
    if (handler) {
      handler(event); // ✅ actually call the function
    } else {
      console.info(`- ${event.type.replace('Event', '')} in ${event.repo.name}`);
    }
  });
}

if (username && username.trim().length !== 0) {
  get_gh_user_activity(username);
} else {
  console.warn(`
Usage:
  github-activity: <username>
  `);
  process.exit(1);
}
