import 'reflect-metadata';
import express from 'express';
import { UserRoute } from './routes/user.route';
import { AppDataSource } from './data-source';
import * as bodyParser from 'body-parser';

AppDataSource.initialize()
    .then(async () => {
        const app = express();
        const port = process.env.PORT || 3000;
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use('/user', UserRoute);
        app.listen(port, () => {
            console.log('Server is running on http://localhost:' + port);
        });
        console.log('Data Source has been initialized!');
    })
    .catch((error) => console.log(error));
