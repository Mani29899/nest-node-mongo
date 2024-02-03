// user.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Type } from 'class-transformer';
import { Client } from '../../client/entities/client.entity';
import { CLIENTS, CLIENT_ID, USERS } from 'src/constants';

export type UserDocument = User & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})

export class User {
  @Prop({
    type: String,
    unique: true,
    default: function genUUID() {
      return uuid();
    },
  })
  userId: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({required:true})
  age:number

  @Prop({required:true})
  ratings:Ratings;

  @Prop({ required: false })
  clientId?: string;

  @Type(() => Client)
  Client: Client;

  @Prop({ required: true })
  password: string;

}

// /ratings for the user
export type Ratings = 1 | 2 | 3 | 4 | 5;

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual(CLIENTS, {
  ref: CLIENTS,
  localField: CLIENT_ID,
  foreignField: CLIENT_ID,
  justOne: true,
});