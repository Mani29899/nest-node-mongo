import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    // this is for the mongo db connnection
    MongooseModule.forRoot('mongodb://localhost:27017'),
    UserModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
