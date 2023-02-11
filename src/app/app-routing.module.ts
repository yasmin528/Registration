import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUPComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
const routes: Routes = [
  {path:'',component: LogInComponent},
  {path:'SignUP',component:SignUPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
