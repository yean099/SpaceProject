import { Component,OnInit,  HostBinding } from '@angular/core'
import { PlanetasService }  from './../planetas.service'
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from '@angular/router'
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { DecimalPipe } from '@angular/common';


@Component({
    selector: 'fuselaje_id',
    templateUrl: './fuselaje.html',
    styleUrls: ['./fuselaje.css']
})
export class fuselaje implements OnInit {

    pathname: string;
    image: string;
    degrees: string;
    planet: string;
    planets= ['mercurio','venus','tierra','marte','jupiter','saturno','urano','neptuno','pluton'];

  
    constructor(private _decimalPipe: DecimalPipe, public json: PlanetasService, public rutaActiva: ActivatedRoute, private router: Router){
        
     }

        //hace el llamdado al backend con la ruta seleccionada para trae el respectivo json
    ngOnInit() {

            this.pathname = window.location.pathname;
            let str1: string = this.pathname;
            let resp= str1.split('/');
    
        if(resp.includes('planetas') && this.planets.includes(resp[resp.length-1]))
        {
                this.json.getPlanetas('http://localhost:3000'+this.pathname).subscribe((res: any)=> {
                
                    this.planet=resp[resp.length-1];
                    this.image="'"+res['img']+"'";
                    this.degrees=res['degrees']+".0000";  
                    console.log(this.degrees);
            });      

         }
         else{
            this.planet='x';
            this.degrees='y';
         }
    }

    getUrl()
    {
        return "url("+this.image+")";
    }
}