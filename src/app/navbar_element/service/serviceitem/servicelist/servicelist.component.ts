import { ServiceData } from 'src/app/data/service.data';
import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/model/service.model';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css'],
})
export class ServicelistComponent implements OnInit {
  @Input() service: Service | undefined;
  constructor(private serviceData: ServiceData) {}

  ngOnInit(): void {}
  onSelectedService() {
    this.serviceData.serviceSelectedEvent.emit(this.service);
  }
}
