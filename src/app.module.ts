import { ChatModule } from './chat/chat.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      async useFactory(config: ConfigService) {
        return {
          type: 'mysql',
          host: config.get('DB_HOST'),
          port: +config.get('DB_PORT'),
          username: config.get('DB_USER'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_DATABASE'),
          autoLoadEntities: true,
          // synchronize: true,
          // logging: true,
        } as ConnectionOptions;
      },
    }),
    
    ChatModule,
  ],
  controllers: [],
  providers: [AppGateway],
})

export class AppModule {
  static port: number;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = configService.get('API_PORT');
  }
}
