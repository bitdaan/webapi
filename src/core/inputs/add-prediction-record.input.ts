import { InputType, Field, Float } from '@nestjs/graphql';
import { IsDate } from 'class-validator';

@InputType()
export class AddPredictionInput {
  @Field()
  @IsDate()
  date: Date;

  @Field((type) => [Float])
  prices: [];
}
