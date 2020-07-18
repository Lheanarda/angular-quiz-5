import { CounterService } from './../services/counter.service';
import { UserService } from './../services/users.service';
import { User } from './../shared/user.model';
import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  OFFLINE_STATUS:string = 'offline';
  @Input() inactiveUsers:User[];
  
  constructor(private userService:UserService, private counterService:CounterService){}

  ngOnInit(): void {
      this.inactiveUsers = this.userService.inactiveUsers;
  }

  toActive(i:number){
    this.userService.setUserActive(i);
    this.counterService.incrementInactiveToActive();
  }

}
