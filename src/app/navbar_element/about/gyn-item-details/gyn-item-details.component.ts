import { Component, OnInit } from '@angular/core';
import { Gym } from 'src/app/model1/gym.model';
import { GymService } from 'src/app/services1/gym.services';

@Component({
  selector: 'app-gyn-item-details',
  templateUrl: './gyn-item-details.component.html',
  styleUrls: ['./gyn-item-details.component.css'],
})
export class GynItemDetailsComponent implements OnInit {
  gym: Gym | undefined;
  constructor(private gymService: GymService) {}

  ngOnInit(): void {
    this.gymService.gymSelected.subscribe((gym) => {
      this.gym = gym;
    });
  }
}
