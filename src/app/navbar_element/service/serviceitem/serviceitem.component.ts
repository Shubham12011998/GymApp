import { Component, OnInit } from '@angular/core';
import { ServiceData } from 'src/app/data/service.data';
import { Service } from 'src/app/model/service.model';

@Component({
  selector: 'app-serviceitem',
  templateUrl: './serviceitem.component.html',
  styleUrls: ['./serviceitem.component.css'],
})
export class ServiceitemComponent implements OnInit {
  services: Service[] | undefined;
  constructor(private serviceData: ServiceData) {}

  ngOnInit(): void {
    this.services = this.serviceData.getServices();
  }
}
