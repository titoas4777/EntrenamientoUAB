import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { MatchHeightModule } from '../../partials/general/match-height/match-height.module';
import { EstadoContableComponent } from './estado-contable/estado-contable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NewsFeedComponent, EstadoContableComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    MatchHeightModule,
    NgbModule,
    NgxDatatableModule,
    RouterModule.forChild([
      {
        path: 'news-feed',
        component: NewsFeedComponent
      },
      {
        path: 'estado-contable',
        component: EstadoContableComponent
      },
    ]),
  ]
})
export class NewsFeedModule { }
