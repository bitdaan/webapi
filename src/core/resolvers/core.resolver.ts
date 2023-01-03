import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PredictionRecordType } from '../types/prediction-record.type';
import { GetPredictionHistoryInput } from '../inputs/get-predictions-history.input';
import { AddPredictionInput } from '../inputs/add-prediction-record.input';
import { PredictionService } from '../services/prediction.service';

@Resolver((of) => PredictionRecordType)
export class CoreResolver {
  constructor(private predictionService: PredictionService) {}

  @Query((returns) => PredictionRecordType)
  getPeakPrediction() {
    return this.predictionService.getPeak();
  }

  @Query((returns) => [PredictionRecordType])
  getPredictionHistory(
    @Args('getPredictionHistoryInput')
    getPredictionHistoryInput: GetPredictionHistoryInput,
  ) {
    return this.predictionService.getHistoryList(getPredictionHistoryInput);
  }

  @Mutation((returns) => PredictionRecordType)
  addPredictionRecord(
    @Args('addPredictionInput') addPredictionInput: AddPredictionInput,
  ) {
    return this.predictionService.add(addPredictionInput);
  }
}
