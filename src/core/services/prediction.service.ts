import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { AddPredictionInput } from '../inputs/add-prediction-record.input';
import { GetPredictionHistoryInput } from '../inputs/get-predictions-history.input';
import { PredictionRecord } from '../entities/prediction-record.entity';

@Injectable()
export class PredictionService {
  constructor(
    @InjectRepository(PredictionRecord)
    private predictionRepository: Repository<PredictionRecord>,
  ) {}

  getPeak() {
    return this.predictionRepository.findOne({
      where: {},
      order: {
        date: 'DESC',
      },
    });
  }

  async getHistoryList(getPredictionHistoryInput: GetPredictionHistoryInput) {
    const { from, to } = getPredictionHistoryInput;
    return this.predictionRepository.find({
      where: {
        date: Between(from, to),
      },
      order : {
        date : "DESC"
      }
    });
  }

  add(addPredictionInput: AddPredictionInput): Promise<PredictionRecord> {
    const obj = this.predictionRepository.create({
      prices: addPredictionInput.prices,
      date: addPredictionInput.date,
    });
    return this.predictionRepository.save(obj);
  }
}
