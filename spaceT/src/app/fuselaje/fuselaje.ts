import { Component } from '@angular/core'
import { PlanetasService }  from './../planetas.service'

@Component({
    selector: 'fuselaje_id',
    templateUrl: './fuselaje.html',
    styleUrls: ['./fuselaje.css']
})
export class fuselaje {

    

    constructor(public json: PlanetasService){
        var URLactual = window.location;
        console.log(URLactual);
        this.json.getPlanetas('http://localhost:3000/planetas').subscribe((res: any)=> {
            console.log(res);
        });
    }
}