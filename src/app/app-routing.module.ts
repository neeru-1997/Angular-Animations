import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from './advanced/advanced.component';
import { BasicComponent } from './basic/basic.component';
import { ContainedComponent } from './contained/contained.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'animation-home',
    component: HomeComponent,
  },
  {
    path: 'animation-basics',
    component: BasicComponent,
  },
  {
    path: 'animation-contained',
    component: ContainedComponent,
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent,
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
