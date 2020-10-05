import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
HomeComponent


const routes: Routes = [
  {path: '' , component: HomeComponent, pathMatch : 'full'},
  {path: 'home' , component: HomeComponent},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
