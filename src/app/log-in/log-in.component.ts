import { Component,OnInit , ViewEncapsulation} from '@angular/core';
import { User } from '../module/user/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  encapsulation: ViewEncapsulation.None //to manipulate css body
})
export class LogInComponent implements OnInit {
  email:string="";
  password:string="";
  users:User[]=[];
  constructor(private usersInfo:UserService ){}
  ngOnInit(): void {
    this.usersInfo.getUser().subscribe(data=>{
      this.users=data;
    })
  }
  logIn():void{
    for (let index = 0; index < this.users.length; index++) {
      if(this.email==this.users[index].email&&this.password==this.users[index].password){
        alert("log in successfully");
        return;
      }
    }
    alert("incorrect email or password");
    this.email="";
    this.password ="";
  }
}
