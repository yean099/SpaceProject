import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanetasModule } from './planetas/planetas.module';

@Module({
  imports: [PlanetasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
