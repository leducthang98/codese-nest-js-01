import { join } from 'path';
import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => {
            console.log("a", join(__dirname, '**', '*.entity.{ts,js}'))
            return await createConnection({
                type: 'mysql',
                host: 'codedidungso.me',
                port: 4306,
                username: 'root',
                password: 'tu1den6',
                database: 'thangld',
                entities: [join(__dirname, '../', '../', '**', '*.entity.{ts,js}')],
                synchronize: true,
            })
        }
    },
];