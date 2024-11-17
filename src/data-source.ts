import { DataSource } from 'typeorm/data-source/DataSource';
import * as dotenv from 'dotenv';
import { entities } from './routes/entity/entities';

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
    process.env;

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: parseInt(DB_PORT || '5432'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    //logging logs sql command on the treminal
    logging: NODE_ENV === 'dev' ? false : false,
    entities: entities,
    migrations: [__dirname + '/migration/*.ts'],
    subscribers: [],
});
