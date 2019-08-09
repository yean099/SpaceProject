import { Module } from '@nestjs/common';
import { PlanetasController } from './planetas.controller';
import { PlanetasService } from './planetas.service';

@Module({
  controllers: [PlanetasController],
  providers: [PlanetasService]
})
export class PlanetasModule {}
