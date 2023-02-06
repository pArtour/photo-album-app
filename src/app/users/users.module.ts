import { UsersListComponent } from './components/users-list/users-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent as UsersPage } from './pages/users-list/users-list.component';

import { UsersRoutingModule } from './users-routing.module';
import { UsersDetailComponent } from './pages/users-detail/users-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { SharedPipesModule } from '../shared/pipes/shared-pipes/shared-pipes.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserMetricsComponent } from './components/user-metrics/user-metrics.component';
import { UserAlbumsListComponent } from './components/user-albums-list/user-albums-list.component';
import { UserActionButtonsComponent } from './components/user-action-buttons/user-action-buttons.component';
import { NewPhotoFormComponent } from './components/new-photo-form/new-photo-form.component';
import { NewAlbumFormComponent } from './components/new-album-form/new-album-form.component';
import { PhotosService } from '../core/services/photos/photos.service';

@NgModule({
  declarations: [
    UsersPage,
    UsersListComponent,
    UsersDetailComponent,
    UserInfoComponent,
    UserMetricsComponent,
    UserAlbumsListComponent,
    UserActionButtonsComponent,
    NewPhotoFormComponent,
    NewAlbumFormComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    SharedPipesModule,
    ReactiveFormsModule,
  ],
  providers: [UsersService, PhotosService],
})
export class UsersModule {}
