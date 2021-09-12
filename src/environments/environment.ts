import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Adrash',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44377',
    redirectUri: baseUrl,
    clientId: 'Adrash_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone Adrash',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44382',
      rootNamespace: 'Adrash',
    },
  },
} as Environment;
