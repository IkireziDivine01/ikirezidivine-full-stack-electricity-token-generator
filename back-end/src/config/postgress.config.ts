import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

// entities: ['/src/modules/**/entities/*.entity.ts'],
export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'divine',
  password: 'divine',
  database: 'tokengen',
  autoLoadEntities: true,
  synchronize: true,
  migrations: ['dist/src/db/migrations.js'],
  cli: { migrationsDir: 'src/db/migrations' },
};

// POSTGRES_HOST=postgres
// POSTGRES_PORT=5432
// POSTGRES_USER=divine
// POSTGRES_PASSWORD=divine
// POSTGRES_DATABASE=token-gen
