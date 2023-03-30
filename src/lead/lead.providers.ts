import { Lead } from './lead.schema';

export const leadsProviders = [
  {
    provide: 'LEADS_REPOSITORY',
    useValue: Lead,
  },
];
