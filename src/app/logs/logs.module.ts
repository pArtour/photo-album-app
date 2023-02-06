import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsRoutingModule } from './logs-routing.module';
import { LogsTableComponent } from './components/logs-table/logs-table.component';
import { LogsListComponent } from './pages/logs-list/logs-list.component';



@NgModule({
  declarations: [LogsTableComponent, LogsListComponent],
  imports: [CommonModule, LogsRoutingModule, RouterModule],
})
export class LogsModule {}
