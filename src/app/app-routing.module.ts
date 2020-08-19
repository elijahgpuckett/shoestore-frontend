import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { ShoesComponent } from './admin/shoes/shoes.component';
import { ShopshoeComponent } from './shopshoe/shopshoe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin/users', component: UsersComponent},
  { path: 'admin/shoes', component: ShoesComponent},
  { path: 'shop', component: ShopshoeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
