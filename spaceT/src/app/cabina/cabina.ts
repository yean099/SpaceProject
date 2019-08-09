import { Component } from '@angular/core'


import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Component({
    selector: 'cabina_id',
    templateUrl: './cabina.html',
    styleUrls: ['./cabina.css']
})
export class Cabina {
    counter$: Observable<number>;
    count = 10; 
    countdown= 10;
    
 startCountdownTimer() {
    const interval = 1000;
    const duration = 10 * 1000;
    const stream$ = timer(0,1000).pipe(
        take(this.count),
        map(() => --this.count)
      );
    stream$.subscribe(value => this.countdown = value);
  }
    
}

