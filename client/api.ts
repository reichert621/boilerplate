import * as request from 'superagent';

export const ping = (): Promise<string> => {
  return request.get('/api/ping').then(res => res.body.message);
};
