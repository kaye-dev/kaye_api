import kenx from 'knex';

// https://knexjs.org/guide/#configuration-options
export const dbConnection = () =>
  kenx({
    client: 'pg',
    version: '12',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'kaye_development',
    },
  });
