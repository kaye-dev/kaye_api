import { addLayout, configure } from 'log4js';

addLayout('json', function (config) {
  return function (logEvent) {
    return JSON.stringify(logEvent, null, 2) + config.separator;
  };
});

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
      enableCallStack: true,
    },
  },
});
