import { Upload } from './upload.schema';

export const uploadProviders = [
  {
    provide: 'UPLOADS_REPOSITORY',
    useValue: Upload,
  },
];
