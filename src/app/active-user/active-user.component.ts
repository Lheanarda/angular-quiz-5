import { CounterService } from './../services/counter.service';
import { UserService } from './../services/users.service';
import { User } from './../shared/user.model';
import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  @Input() activeUsers:User[];

  constructor(private userService:UserService, private counterService:CounterService) { }

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
  }

  toInactive(idx:number){
    this.userService.setUserInactive(idx);
    this.counterService.incrementActiveToInactive();
  }

  

}
