import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserListComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    PanelModule,
    ProgressBarModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
