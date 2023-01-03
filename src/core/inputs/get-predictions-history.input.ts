import { InputType, Field } from '@nestjs/graphql';
import { IsDate } from 'class-validator';

@InputType()
export class GetPredictionHistoryInput {
  @Field()
  @IsDate()
  from: Date;

  @Field()
  @IsDate()
  to: Date;
}
