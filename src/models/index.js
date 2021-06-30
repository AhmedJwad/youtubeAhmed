// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Commet, Video, User } = initSchema(schema);

export {
  Commet,
  Video,
  User
};