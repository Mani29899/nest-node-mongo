import { User, UserSchema } from '../user/entities/user.entity';
import { Client, ClientSchema } from '../client/entities/client.entity';

export default [
  { name: User.name, schema: UserSchema },
  { name: Client.name, schema: ClientSchema }
];

console.log('database connection successfully Established')