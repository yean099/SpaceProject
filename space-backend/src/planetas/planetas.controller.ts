import { Controller,Get,Param, Post, Body, Query, Delete } from '@nestjs/common';
import {PlanetasService} from './planetas.service'


@Controller('planetas')
export class PlanetasController {

    constructor(private planetasService: PlanetasService) { }

//metodo encargado de devolverme todos los planetas
    @Get()
    async getPlanetas() {
        const planetas = await this.planetasService.getPlanetas();
        return planetas;
    }


//Por medio de un identificador este metodo regresa el planeta específico
    @Get(':ID')
    async getPlaneta(@Param('ID') planetaID) {
        const planeta = await this.planetasService.getPlaneta(planetaID);
        return planeta;
    }
}
