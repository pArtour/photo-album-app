import { Component, Input } from '@angular/core';
import { Album } from 'src/app/core/models/album.model';
import { UserMetrics } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-metrics',
  templateUrl: './user-metrics.component.html',
  styleUrls: ['./user-metrics.component.css']
})
export class UserMetricsComponent {
  @Input() metrics: UserMetrics | null = null;
  @Input() albums: Album[] | null = null;
}
