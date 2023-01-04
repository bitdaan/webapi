import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreResolver } from './resolvers/core.resolver';
import { PredictionService } from './services/prediction.service';
import { PredictionRecord } from './entities/prediction-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PredictionRecord])],
  exports: [PredictionService],
  providers: [CoreResolver, PredictionService],
})
export class CoreModule {}
