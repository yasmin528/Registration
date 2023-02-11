import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import { User } from '../module/user/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
//don`t forget implementation of onInit
export class SignUPComponent implements OnInit {
    name:string;
    password:string;
    email:string;
    users:User[]=[];
    constructor(private userService:UserService){
      this.name="";
      this.email="";
      this.password = "";
    }
    ngOnInit(): void {
      this.userService.getUser().subscribe((data)=>{
        console.log(data)
        this.users = data;
      });
    }
    signUp():void{
      for (let index = 0; index < this.users.length; index++) {
        if(this.email==this.users[index].email){
          alert("Email already exist");
          this.name="";
          this.email="";
          this.password="";
          return;
        }
      }
      const newUser={
        id :this.users.length+1,
        email:this.email,
        password:this.password,
        name:this.name
      }
      this.users.push(newUser);
      this.userService.put(newUser);
      alert("Sign Up successfully");
      this.name="";
      this.email="";
      this.password="";
    }
}
