import kenx from 'knex';

// https://knexjs.org/guide/#configuration-options
export const db = kenx({
  client: 'pg',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'kaye-root',
    password: 'kaye-api-root-password',
    database: 'kaye_db',
  },
});
