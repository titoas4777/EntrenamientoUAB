import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-estado-contable',
  templateUrl: './estado-contable.component.html',
  styleUrls: ['./estado-contable.component.css']
})
export class EstadoContableComponent implements OnInit {
  
  public breadcrumb: any;
  rows= [
    { "name": "Marban", "position": "Otto", "office": "@mdo", "age": "34", "salary": "16000", "startdate": "16/05/2017"},
    { "name": "Jacob", "position": "Thornton", "office": "@fat", "age": "36", "salary": "12000", "startdate": "16/05/2017"},
    { "name": "Albart", "position": "the Bird", "office": "@twitter", "age": "38", "salary": "12000", "startdate": "16/05/2017"},
    { "name": "Marken", "position": "Otto", "office": "@mdo", "age": "32", "salary": "12000", "startdate": "26/05/2017"},
  ]
  public isCollapsed = -1;
  public basicColorCollapse2 = true;

  constructor(private modalService: NgbModal) { }
 
  
  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Estado contable',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'Facturación',
          'isLink': true,
          'link': '/news-feed/news-feed'
        },
        {
          'name': 'Estado contable',
          'isLink': false
        }
      ]
    };

  }
  LargeModel(LargeModelContent) {
    this.modalService.open(LargeModelContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }
}
