import { Component, OnInit } from '@angular/core';
import { Gym } from 'src/app/model1/gym.model';
import { GymService } from 'src/app/services1/gym.services';

@Component({
  selector: 'app-gyn-item-list',
  templateUrl: './gyn-item-list.component.html',
  styleUrls: ['./gyn-item-list.component.css'],
})
export class GynItemListComponent implements OnInit {
  gyms: Gym[] | undefined;
  constructor(private gymService: GymService) {}

  ngOnInit(): void {
    this.gyms = this.gymService.getGyms();
  }
}
