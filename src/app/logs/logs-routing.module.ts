import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsListComponent } from './pages/logs-list/logs-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LogsListComponent,
      }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LogsRoutingModule { }
