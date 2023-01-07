import { loggingDate } from '../../util/dataFormat';

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

export const loggerKind = {
  access: 'access',
  error: 'error',
};

export const logging = (logs: { [key: string]: string }) => {
  const dt = new Date();
  const event = { event_at: loggingDate(dt) };
  // Format and output with two-space indentation (indent: 2)
  console.log(JSON.stringify({ ...logs, ...event }, null, 2));
};
