import { addLayout, configure } from 'log4js';

addLayout('json', function (config) {
  return function (logEvent) {
    return JSON.stringify(logEvent, null, 2) + config.separator;
  };
});

/** ログファイルの使い分け
 * 基本的なログは access.log に記録する
 * error.log は、クリティカルなエラーの場合に記録される
 */
configure({
  appenders: {
    console: {
      type: 'console',
    },
    access: {
      type: 'dateFile',
      filename: 'logs/access.log',
      pattern: '-yyyy-MM-dd',
      layout: { type: 'json', separator: ',' },
    },
    error: {
      type: 'dateFile',
      filename: 'logs/error.log',
      pattern: '-yyyy-MM-dd',
      layout: { type: 'json', separator: ',' },
    },
  },
  categories: {
    default: {
      appenders: ['console', 'access', 'error'],
      level: 'all',
    },
    error: {
      appenders: ['console', 'error'],
      level: 'warn',
      enableCallStack: true,
    },
  },
});
