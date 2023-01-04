import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('AuthToken')
export class AuthToken {
  @Field((type) => ID)
  Authorization : string;
}
