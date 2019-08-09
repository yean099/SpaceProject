import { Injectable, HttpException} from '@nestjs/common';
import { PLANETAS } from '../mocks/planetas.mock'


@Injectable()
export class PlanetasService {
    planetas = PLANETAS;

    getPlanetas(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.planetas);
        });
    }

    getPlaneta(planetaID): Promise<any> {
        let id = String(planetaID);
        console.log(id);
        return new Promise(resolve => {
            const planeta = this.planetas[id];
            console.log(planeta);

            if (!planeta) {
                throw new HttpException('El planeta no exites!', 404);
            }
            resolve(planeta);
        });
    }
}
