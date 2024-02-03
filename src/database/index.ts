import { User, UserSchema } from '../user/entities/user.entity';
import { Client, ClientSchema } from '../client/entities/client.entity';
import { CLIENTS, USERS } from 'src/constants';

export default [
  { name: USERS, schema: UserSchema },
  { name: CLIENTS, schema: ClientSchema }
];

console.log('database connection successfully Established')