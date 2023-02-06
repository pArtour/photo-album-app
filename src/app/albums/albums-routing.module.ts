import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsDetailComponent } from './pages/albums-detail/albums-detail.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: AlbumsDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule { }
