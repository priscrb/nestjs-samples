import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig), // forFeature is used for partial registration
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService], // the subset of providers that are provided by this module and should be available in other modules which import this module.ex: coffees-rating.service
})
export class CoffeesModule {}
