import { LogsService } from '../../../core/services/logs/logs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent  {
  public logs$ = this.logsService.logs$;
  constructor(private readonly logsService: LogsService) {}

}
