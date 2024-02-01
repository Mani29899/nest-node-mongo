import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import databaseConfig from 'src/database';
import {MongooseModule} from  '@nestjs/mongoose'

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[MongooseModule.forFeature(databaseConfig)]
})
export class UserModule {}
