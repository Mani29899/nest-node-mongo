import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import databaseConfig from '../database/index'
import  {MongooseModule} from '@nestjs/mongoose'

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports:[MongooseModule.forFeature(databaseConfig)]
})
export class ClientModule {}
