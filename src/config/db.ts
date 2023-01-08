import kenx from 'knex';

// https://knexjs.org/guide/#configuration-options
export const dbConnection = () =>
  kenx({
    client: 'pg',
    version: '14.6',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'kaye',
      password: '',
      database: 'kaye_db',
    },
  });
