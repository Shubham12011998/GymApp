import { Service } from './../../../model/service.model';
import { Component, OnInit } from '@angular/core';
import { ServiceData } from 'src/app/data/service.data';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrls: ['./servicedetails.component.css'],
})
export class ServicedetailsComponent implements OnInit {
  service: Service | undefined;
  constructor(private serviceData: ServiceData) {}

  ngOnInit(): void {
    this.serviceData.serviceSelectedEvent.subscribe((service) => {
      this.service = service;
    });
  }
}
