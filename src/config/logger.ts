import { getLogger } from 'log4js';
export const systemLogger = getLogger('system');
export const accessLogger = getLogger('access');
export const errorLogger = getLogger('error');

export const getReferer = (referer?: string): string => {
  return referer ? `referer: ${referer}` : 'referer: -';
};

export const controllerLogFormat = (controllerAction: string, ip: string, referer: string): string => {
  return `controller\n[Controller]: ${controllerAction}\n[IP] ${ip}\n[Referer] ${referer}`;
};
