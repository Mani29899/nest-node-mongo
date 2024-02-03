// client.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CLIENT_ID, USERS } from 'src/constants';
import { v4 as uuid } from 'uuid';

export type ClientDocument = Client & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({
    required: true,
    unique: true,
    default: function genUUID() {
      return uuid();
    },
  })
  clientId: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

ClientSchema.virtual(USERS, {
  ref: USERS,
  localField: CLIENT_ID,
  foreignField: CLIENT_ID,
  justOne: false,
});