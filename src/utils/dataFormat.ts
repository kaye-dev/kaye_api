// ex. 2023-01-01T01:01:01.001
export const loggingDate = (date: Date): string => {
  return new Date(date).toISOString().replace('Z', '');
};
