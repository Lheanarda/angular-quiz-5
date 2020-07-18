import { CounterService } from './counter.service';
import { User } from './../shared/user.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService{
    ONLINE_STATUS:string = 'online';
    OFFLINE_STATUS:string = 'offline';
    activeUsers:User[]=[
        new User ('Alexander',this.ONLINE_STATUS),
        new User ('Nico',this.ONLINE_STATUS),
        new User ('Antoni',this.ONLINE_STATUS)
      ];
    
      inactiveUsers:User[]=[
        new User ('Brian',this.OFFLINE_STATUS),
        new User ('Felicia',this.OFFLINE_STATUS)
      ];
    
      setUserActive(idx:number){
        this.inactiveUsers[idx].status = this.ONLINE_STATUS;
        this.activeUsers.push(this.inactiveUsers[idx]);
        this.inactiveUsers.splice(idx,1);
      }
    
      setUserInactive(idx:number){
        this.activeUsers[idx].status = this.OFFLINE_STATUS;
        this.inactiveUsers.push(this.activeUsers[idx]);
        this.activeUsers.splice(idx,1);
      }
      onUserAdded(name:string){
        this.inactiveUsers.push({name:name,status:this.OFFLINE_STATUS});
      }

      constructor(private counterService:CounterService){}
}