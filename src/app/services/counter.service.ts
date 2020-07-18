import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log("Total active to inactive action : "+this.activeToInactiveCounter);
    }

    incrementInactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log("Total inactive to active action : "+this.inactiveToActiveCounter);
    }
}
