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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logging = (logging: any) => {
  const dt = new Date();
  const event = { event_at: loggingDate(dt) };
  // Format and output with two-space indentation (indent: 2)
  console.log(JSON.stringify({ ...logging, ...event }, null, 2));
};
