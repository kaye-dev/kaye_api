import { loggingDate } from '../../utils/dataFormat';

export type AccessLogInfo = {
  /**
   * cloudwatch や cloud loggingで event_id を生成してくれるため不要
   */
  // event_id: string;
  event_at: string;
  /**
   * request info
   */
  url: string;
  method: 'GET' | 'POST' | 'UPDATE' | 'DELETE';
  ip: string;
  referer: string;
  params: { [key: string]: string };
  /**
   * user info
   */
  is_signed: boolean;
  user_id: boolean;
};

export type LogKind = 'default' | 'info' | 'warn' | 'error';

export const loggerKind = {
  access: 'access',
  error: 'error',
};

export const logging = (logs: { [key: string]: string }, logKind: LogKind) => {
  const dt = new Date();
  const addInfo = { event_at: loggingDate(dt), logKind: logKind };
  // Format and output with two-space indentation (indent: 2)
  switch (logKind) {
    case 'default':
      console.log(JSON.stringify({ ...logs, ...addInfo }, null, 2));
      break;
    case 'info':
      console.log(JSON.stringify({ ...logs, ...addInfo }, null, 2));
      break;
    case 'warn':
      console.log(JSON.stringify({ ...logs, ...addInfo }, null, 2));
      break;
    case 'error':
      console.log(JSON.stringify({ ...logs, ...addInfo }, null, 2));
  }
};
