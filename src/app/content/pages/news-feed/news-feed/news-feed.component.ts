import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableApiService } from 'src/app/_services/table-api.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  options = {
    minimize: true,
    reload: true,
    expand: true,
    close: true
  };
  public breadcrumb: any;
  issueTracking: FormGroup;

  interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
  budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  priority = ['2020-1', '2020-2', '2021-1','2021-2','2022-1'];
  status = ['Not Started', 'Started', 'Fixed'];
  countries: any;
  BasictableData: any;

  constructor(private formBuilder: FormBuilder,
    private tableApiservice: TableApiService) { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Facturación',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
      ]
    };


    this.issueTracking = this.formBuilder.group({
      issueTitle: ['', Validators.required],
      openedBy: ['', Validators.required],
      dateOpened: ['', Validators.required],
      dateFixed: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      comment: ['', Validators.required]
    });
    this.tableApiservice.getBasicTableData().subscribe(Response => {
      this.BasictableData = Response;
      this.getTabledata();
      });
  }
  getTabledata() {
    this.countries = this.BasictableData.rows;
  }
}
