import { Component, Input } from '@angular/core';
import { Log } from 'src/app/core/models/log.model';

@Component({
  selector: 'app-logs-table',
  templateUrl: './logs-table.component.html',
  styleUrls: ['./logs-table.component.css']
})
export class LogsTableComponent {
  @Input() logs: Log[] = [];
}
