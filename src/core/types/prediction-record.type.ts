import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Record')
export class PredictionRecordType {
  @Field((type) => ID)
  id: string;

  @Field()
  date: Date;

  @Field((type) => [Float])
  prices: Float64Array;
}
