import { loggingDate } from '../../util/dataFormat';
export const loggerKind = {
  access: 'access',
  error: 'error',
};
export const getReferer = (referer?: string): string => {
  return referer ? `referer: ${referer}` : 'referer: -';
};

export const controllerLogFormat = (controllerAction: string, ip: string, referer: string): string => {
  return `controller\n[Controller]: ${controllerAction}\n[IP] ${ip}\n[Referer] ${referer}`;
};

export const logging = (logs: { [key: string]: string }) => {
  const dt = new Date();
  const event = { event_at: loggingDate(dt) };
  // Format and output with two-space indentation (indent: 2)
  console.log(JSON.stringify({ ...logs, ...event }, null, 2));
};
