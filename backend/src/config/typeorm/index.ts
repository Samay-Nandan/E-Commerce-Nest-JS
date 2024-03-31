import { DataSource, DataSourceOptions } from 'typeorm';
import {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
} from '@src/config';

export const TypeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  host: POSTGRES_HOST,
  entities: ['dist/httpApi/**/entity/*.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
};

export default new DataSource(TypeOrmConfig);
