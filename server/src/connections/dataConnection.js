import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';
import DebugLib from 'debug';

const debug = new DebugLib('server:mysql');

export default new Sequelize('eoloplantsDB', 'root', 'password', {
    dialect: 'mysql',
    dialectModule: mysql2
});

process.on('exit', async () => {
    await sequelize.close();
    debug(`Closing mysql connection`);
});
