// Check typeORM documentation for more information.
module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST, // localhost
  port: Number(process.env.DB_PORT), // 3306
  username: process.env.DB_USER, // databse login role username
  password: process.env.DB_PASSWORD, // database login role password
  database: process.env.DB_DATABASE, // database name

  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  synchronize: false,

  migrationsRun: false,

  logging: false,
  migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
