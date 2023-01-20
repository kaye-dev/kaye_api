import { Pool } from 'pg';
import 'dotenv/config';

export const pool = new Pool({
  database: process.env.DATABASE_NAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: 5432,
  // ssl: true,
  max: 10,
  idleTimeoutMillis: 600000, // 10 minutes
  connectionTimeoutMillis: 60000, // 60 seconds
  maxUses: 7500,
});

/** Pool config: en
 * max                    : set pool max size to 20
 * idleTimeoutMillis      : close idle clients after 1 second
 * connectionTimeoutMillis: return an error after 1 second if connection could not be established
 * maxUses:               : close (and replace) a connection after it has been used 7500 times (see below for discussion)
 */

/** Pool config: ja
 * max                    : 保持するコネクション数
 * idleTimeoutMillis      : 自動切断時間 (ミリ秒)
 * connectionTimeoutMillis: 新しいクライアントへの接続が確立されたときにタイムアウトになるまで待機する時間 (ミリ秒)
 * maxUses:               : 7,500回使用したらコネクションを閉じる（交換する）
 */

/** FYI
 * Add maxUses config option to Pool
 * https://github.com/brianc/node-postgres/pull/2157
 */

// import { Client } from 'pg';
// This may not be necessary, but …
// export const client = new Client({
//   host: 'localhost',
//   port: 5432,
//   user: 'kaye',
//   password: '',
//   database: 'kaye_development',
// });
