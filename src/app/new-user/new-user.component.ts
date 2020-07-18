import { UserService } from './../services/users.service';
import { User } from './../shared/user.model';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  ONLINE_STATUS:string = 'online';
  OFFLINE_STATUS:string = 'offline';

  @Output() userAdded = new EventEmitter<User>();
  user:User;

  constructor(private userService:UserService) {
    
  }

  ngOnInit(): void {
  }

  onUserCreate(name){
    this.userService.onUserAdded(name.value);
    name.value = "";
  }

}
