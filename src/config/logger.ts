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
