import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { Logger } from '@nestjs/common';

let allowlist = ['http://localhost:3000'];

let corsOptionsDelegate = (req, callback) => {
  let corsOptions = allowlist.indexOf(req.header('Origin')) !== -1 ? { origin: true } : { origin: false };
  console.log('[corsOptions]',corsOptions)
  callback(null, corsOptions);
}

async function bootstrap() {
  const logger: Logger = new Logger('CORS');

  const app = await NestFactory.create(AppModule, { cors: true /*corsOptionsDelegate*/ });
  
  // logger.log(`permission: ${corsOptionsDelegate}`);

  app.use(bodyParser.json({ limit: '250mb' }));
  app.use(bodyParser.urlencoded({ limit: '250mb', extended: true }));

  await app.listen(AppModule.port);
}

bootstrap();
