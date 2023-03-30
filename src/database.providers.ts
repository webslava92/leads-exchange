import { Sequelize } from 'sequelize-typescript';
import { Lead } from './lead/lead.schema';
import { Upload } from './upload/upload.schema';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        database: 'leadsExchange_db',
        username: 'root',
        password: '',
        storage: '../database.db',
      });
      sequelize.addModels([Lead, Upload]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
