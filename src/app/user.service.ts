import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './module/user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[];
  users$=new BehaviorSubject<User[]>([]);
  constructor(private http:HttpClient) {
    this.http.get<User[]>('../assets/usersInfo.json').subscribe(data=>{
      this.users=data;
      this.users$.next(this.users);
    })
  }
  getUser():Observable<User[]>{
    return this.users$.asObservable();;
  }
  put(newUser:User) {
    this.users.push(newUser);
    this.users$.next(this.users)
  }
}

